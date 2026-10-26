import { useEffect, useRef } from "react";

function MeshBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const section = canvas?.parentElement;
        const context = canvas?.getContext("2d");

        if (!canvas || !section || !context) return;

        const spacing = 40;
        const detail = 8;
        const radius = 180;
        const strength = 0.65;

        let width = 0;
        let height = 0;
        let mouse: { x: number; y: number } | null = null;
        let frameId: number | null = null;

        function warp(x: number, y: number) {
            if (!mouse) return { x, y };

            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const distance = Math.hypot(dx, dy);

            if (distance >= radius) return { x, y };

            const influence = (1 - distance / radius) ** 2;

            return {
                x: x + dx * influence * strength,
                y: y + dy * influence * strength,
            };
        }

        function Draw() {
            frameId = null;

            context!.clearRect(0, 0, width, height);
            context!.strokeStyle = "#FFC857";
            context!.globalAlpha = 0.25;
            context!.lineWidth = 1;

            context!.beginPath();

            // Horizontal lines
            for (let y = 0; y <= height; y += spacing) {
                for (let x = 0; x < width + detail; x += detail) {
                    const point = warp(Math.min(x, width), y);

                    if (x === 0) {
                        context!.moveTo(point.x, point.y);
                    } else {
                        context!.lineTo(point.x, point.y);
                    }
                }
            }

            // Vertical lines
            for (let x = 0; x <= width; x += spacing) {
                for (let y = 0; y < height + detail; y += detail) {
                    const point = warp(x, Math.min(y, height));

                    if (y === 0) {
                        context!.moveTo(point.x, point.y);
                    } else {
                        context!.lineTo(point.x, point.y);
                    }
                }
            }

            context!.stroke();
        }

        function RequestDraw() {
            if (frameId === null) {
                frameId = requestAnimationFrame(Draw);
            }
        }

        function Resize() {
            const rect = canvas!.getBoundingClientRect();
            const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

            width = rect.width;
            height = rect.height;

            canvas!.width = Math.round(width * pixelRatio);
            canvas!.height = Math.round(height * pixelRatio);

            context!.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            RequestDraw();
        }

        function HandleMove(event: PointerEvent) {
            if (event.pointerType === "touch") return;

            const rect = canvas!.getBoundingClientRect();

            mouse = {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
            };

            RequestDraw();
        }

        function HandleLeave() {
            mouse = null;
            RequestDraw();
        }

        const observer = new ResizeObserver(Resize);
        observer.observe(canvas);
        Resize();

        section.addEventListener("pointermove", HandleMove);
        section.addEventListener("pointerleave", HandleLeave);
        section.addEventListener("pointercancel", HandleLeave);

        return () => {
            observer.disconnect();

            section.removeEventListener("pointermove", HandleMove);
            section.removeEventListener("pointerleave", HandleLeave);
            section.removeEventListener("pointercancel", HandleLeave);

            if (frameId !== null) cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        />
    );
}

export default MeshBackground;