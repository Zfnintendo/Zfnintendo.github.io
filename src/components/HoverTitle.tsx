import type { ReactNode } from "react";

interface HoverTitleProps {
    children: ReactNode;
}

function HoverTitle({ children }: HoverTitleProps) {
    return (
        <div className="group relative isolate block w-full overflow-hidden py-10 text-center">
            <span
                aria-hidden="true"
                className="
                    pointer-events-none absolute inset-0 -z-10
                    origin-center scale-y-0 bg-primary
                    transition-transform duration-500 ease-out
                    group-hover:scale-y-100
                    motion-reduce:transition-none
                "
            />

            <h2 className="
                text-4xl font-bold sm:text-6xl lg:text-8xl text-primary transition-colors duration-500
                group-hover:text-text
            ">
                {children}
            </h2>
        </div>
    );
}

export default HoverTitle;