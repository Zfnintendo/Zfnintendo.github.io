import { useRef } from 'react';
import type { MouseEvent } from "react";
import cat from "../assets/cat.png";

function CatCard() {
    const imageRef = useRef<HTMLImageElement>(null);

    const maxTilt = 12;

    function HandleMouseMove(event: MouseEvent<HTMLDivElement>) {
        const image = imageRef.current;
        if (!image) return;

        const rect = event.currentTarget.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const x = (event.clientX - centerX) / (rect.width / 2);
        const y = (event.clientY - centerY) / (rect.height / 2);

        const rotateX = -y * maxTilt;
        const rotateY = x * maxTilt;

        image.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    }

    function HandleMouseLeave() {
        if (!imageRef.current) return;

        imageRef.current.style.transform =
            "rotateX(0deg) rotateY(0deg) scale(1)";
    }

    return (
        <div
            className="w-full perspective-[800px]"
            onMouseMove={HandleMouseMove}
            onMouseLeave={HandleMouseLeave}
        >
            <img
                ref={imageRef}
                src={cat}
                alt="Cat Profile Picture"
                className="block h-auto w-full rounded-xl border border-accent transition-transform duration-150 ease-out"
            />
        </div>
    );
}

export default CatCard;