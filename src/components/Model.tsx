import { useGLTF } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import { useState } from "react";

interface ModelProps {
    url: string;
    scale?: number;
}

function Model({url, scale = 1}: ModelProps) {
    const { scene } = useGLTF(url);
    const [hovered, setHovered] = useState(false);

    return (
        <primitive
            object={scene}
            scale={hovered ? scale * 1.1 : scale}
            onPointerOver={(event: ThreeEvent<PointerEvent>) => {
                event.stopPropagation();
                setHovered(true);
            }}
            onPointerOut={() => setHovered(false)}
            onClick={(event: ThreeEvent<MouseEvent>) => {
                event.stopPropagation();
            }}
        />
    );
}

export default Model
