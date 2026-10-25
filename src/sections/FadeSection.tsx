import HoverTitle from "../components/HoverTitle";
import { useEffect, useRef } from "react";

interface FadeSectionProps {
    from: string;
    to: string;
}

function FadeSection({ from, to }: FadeSectionProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const panel = panelRef.current;

        if (!wrapper || !panel) return;

        let frameId: number | null = null;

        function Update() {
            frameId = null;

            const rect = wrapper!.getBoundingClientRect();
            const scrollDistance =
                wrapper!.offsetHeight - panel!.offsetHeight;

            const progress = Math.max(
                0,
                Math.min(1, -rect.top / Math.max(scrollDistance, 1)),
            );

            panel!.style.setProperty(
                "--progress",
                `${progress * 100}%`,
            );
        }

        function RequestUpdate() {
            if (frameId === null) {
                frameId = requestAnimationFrame(Update);
            }
        }

        window.addEventListener("scroll", RequestUpdate, { passive: true });
        window.addEventListener("resize", RequestUpdate);
        Update();

        return () => {
            window.removeEventListener("scroll", RequestUpdate);
            window.removeEventListener("resize", RequestUpdate);

            if (frameId !== null) cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <section className="min-h-screen">

            <div ref={wrapperRef} aria-hidden="true" className="h-[200svh]">
                <div
                    ref={panelRef}
                    className="sticky top-0 flex h-svh w-full items-center justify-center"
                    style={{
                        backgroundColor: `color-mix(
                            in srgb,
                            ${to} var(--progress, 0%),
                            ${from}
                        )`,
                    }}
                >
                    <HoverTitle>Projects!</HoverTitle>
                </div>
            </div>
        </section>
    );
}

export default FadeSection;