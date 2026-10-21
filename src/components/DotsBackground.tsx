import { useEffect, useRef } from 'react';

function DotsBackground() {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const section = canvas?.parentElement;
        const context = canvas?.getContext("2d");

        if (!canvas || !section || !context) return;

        // the settingts
        const spacing = 32;
        const dotRadius = 3;
        const effectRadius = 120;
        const minScale = 0.2;
        const edgeFadeDistance = 150;
        const minEdgeScale = 0;

        let width = 0;
        let height = 0;
        let mouse: {x: number, y: number} | null = null;
        let frameId: number | null = null;

        function Draw() {
            frameId = null;

            context!.clearRect(0, 0, width, height);
            context!.fillStyle = "#FFAA4C";
            context!.globalAlpha = 0.2;

            for (let y = spacing / 2; y < height; y += spacing) {
                for (let x = spacing / 2; x < width; x += spacing) {
                    let scale = 1;

                    if (mouse) {
                        const distance = Math.hypot(x - mouse.x, y - mouse.y);
                        const progress = Math.min(distance / effectRadius, 1);
                        const smooth = progress * progress * (3 - 2 * progress);

                        scale = minScale + (1 - minScale) * smooth;
                    }

                    const edgeDistance = Math.min(y, height - y);
                    const edgeProgress = Math.min(edgeDistance / edgeFadeDistance, 1);

                    const edgeSmooth = edgeProgress * edgeProgress * (3 - 2 * edgeProgress);
                    const edgeScale = minEdgeScale + (1 - minEdgeScale) * edgeSmooth;

                    context!.beginPath();
                    context!.arc(x, y, dotRadius * scale * edgeScale, 0, Math.PI * 2);
                    context!.fill();
                }
            }
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

        function HandlePointerMove(event: PointerEvent) {
            const rect = canvas!.getBoundingClientRect();

            mouse = {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
            };

            RequestDraw();
        }

        function HandlePointerLeave() {
            mouse = null;
            RequestDraw();
        }

        const obvserver = new ResizeObserver(Resize);
        obvserver.observe(canvas);
        Resize();

        section.addEventListener("pointermove", HandlePointerMove);
        section.addEventListener("pointerleave", HandlePointerLeave);
        section.addEventListener("pointercancel", HandlePointerLeave);

        return () => {
            obvserver.disconnect();


            section.removeEventListener("pointermove", HandlePointerMove);
            section.removeEventListener("pointerleave", HandlePointerLeave);
            section.removeEventListener("pointercancel", HandlePointerLeave);

            if (frameId !== null)  {
                cancelAnimationFrame(frameId);
            }
        };
    }, []);

    return (
        <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full" />
    );

}

export default DotsBackground;