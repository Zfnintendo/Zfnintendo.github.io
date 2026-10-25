import { useEffect, useRef } from 'react';

function ArrowsBackground() {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const section = canvas?.parentElement;
        const context = canvas?.getContext("2d");

        if (!canvas || !section || !context) return;

        // the settingts
        const spacing = 32;
        const maxLength = 24;
        const edgeFadeDistance = 150;

        let width = 0;
        let height = 0;
        let mouse: {x: number, y: number} | null = null;
        let frameId: number | null = null;

        function Draw() {
            frameId = null;

            context!.clearRect(0, 0, width, height);
            context!.strokeStyle = "#FFAA4C";
            context!.lineWidth = 1.5;
            context!.lineCap = "round";
            context!.lineJoin = "round";

            // puts the arrows charge thing at the center yeah when there is like no mouse on scrren
            const charge = mouse ?? {
                x: width / 2,
                y: height / 2,
            };

            for (let y = spacing / 2; y < height; y += spacing) {
                for (let x = spacing / 2; x < width; x += spacing) {
                    const dx = x - charge.x;
                    const dy = y - charge.y;
                    const distance = Math.hypot(dx, dy);

                    if (distance < 1) continue;

                    // unit vector pointing away from the charge
                    const directionX = dx / distance;
                    const directionY = dy / distance;

                    // visual clarity. verity
                    const strength = 1 / (1 + (distance / 200) ** 2);
                    const length = maxLength * (0.3 + 0.7 * strength);

                    const edgeProgress = Math.min(
                        Math.min(y, height - y) / edgeFadeDistance,
                        1,
                    );

                    const edgeFade =
                        edgeProgress * edgeProgress * (3 - 2 * edgeProgress);

                    context!.globalAlpha =
                        (0.12 + strength * 0.4) * edgeFade;

                    const startX = x - directionX * length / 2;
                    const startY = y - directionY * length / 2;
                    const endX = x + directionX * length / 2;
                    const endY = y + directionY * length / 2;

                    const headLength = length * 0.3;
                    const headWidth = headLength * 0.6;

                    const perpendicularX = -directionY;
                    const perpendicularY = directionX;

                    context!.beginPath();

                    context!.moveTo(startX, startY);
                    context!.lineTo(endX, endY);

                    context!.moveTo(
                        endX - directionX * headLength + perpendicularX * headWidth,
                        endY - directionY * headLength + perpendicularY * headWidth,
                    );
                    context!.lineTo(endX, endY);
                    context!.lineTo(
                        endX - directionX * headLength - perpendicularX * headWidth,
                        endY - directionY * headLength - perpendicularY * headWidth,
                    );

                    context!.stroke();
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

export default ArrowsBackground;