// unused

import { useEffect, useRef } from "react";

function MouseGlow() {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const glow = glowRef.current;
        const section = glow?.parentElement;

        if (!glow || !section) return;

        let frameId: number | null = null;
        let x = 0;
        let y = 0;

        function update() {
            frameId = null;
            glow!.style.left = `${x}px`;
            glow!.style.top = `${y}px`;
        }

        function HandleMove(event: PointerEvent) {
            if (event.pointerType === "touch") return;

            const rect = section!.getBoundingClientRect();

            x = event.clientX - rect.left;
            y = event.clientY - rect.top;

            glow!.style.opacity = "1";

            if (frameId === null) {
                frameId = requestAnimationFrame(update);
            }
        }

        function HandleLeave() {
            glow!.style.opacity = "0";
        }

        section.addEventListener("pointermove", HandleMove);
        section.addEventListener("pointerleave", HandleLeave);
        section.addEventListener("pointercancel", HandleLeave);

        return () => {
            section.removeEventListener("pointermove", HandleMove);
            section.removeEventListener("pointerleave", HandleLeave);
            section.removeEventListener("pointercancel", HandleLeave);

            if (frameId !== null) cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            aria-hidden="true"
            className="
                pointer-events-none absolute z-0
                h-96 w-96 -translate-x-1/2 -translate-y-1/2
                rounded-full opacity-0
                transition-opacity duration-300
                motion-reduce:transition-none
            "
            style={{
                background: `
                    radial-gradient(
                        circle,
                        color-mix(in srgb, var(--color-primary) 35%, transparent) 0%,
                        transparent 70%
                    )
                `,
            }}
        />
    );
}

export default MouseGlow;