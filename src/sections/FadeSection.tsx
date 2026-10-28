import HoverTitle from "../components/HoverTitle";
import ModelSlider from "../components/ModelSlider";
import MeshBackground from "../components/MeshBackground";
import { useEffect, useRef, useState } from "react";

interface FadeSectionProps {
    from: string;
    to: string;
}

function FadeSection({ from, to }: FadeSectionProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const [darkness, setDarkness] = useState(0);

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

            setDarkness(progress);

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
                    className="sticky top-0 grid h-svh w-full grid-rows-3"
                    style={{
                        backgroundColor: `color-mix(
                            in srgb,
                            ${to} var(--progress, 0%),
                            ${from}
                        )`,
                    }}
                >   
                    <MeshBackground />

                    <div  className="min-h-0 min-w-0">
                        <ModelSlider darkness={darkness} />
                    </div>

                    <div className="flex min-h-0 items-center justify-center">
                        <HoverTitle>Projects!</HoverTitle>
                    </div>
                    
                    <div className="flex min-h-0 items-center justify-center">
                        <ModelSlider darkness={darkness} />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default FadeSection;