import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import type { ThreeEvent } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import type { Group } from "three";

interface ModelProps {
    url: string;
    scale?: number;
}

function Model({ url, scale = 1}: ModelProps) {
    const { scene } = useGLTF(url);
    const groupRef = useRef<Group>(null);
    const [hovered, setHovered] = useState(false);

    const dragging = useRef(false);
    const previous = useRef({ x: 0, y: 0, time: 0});
    const velocity = useRef({ x: 0, y: 0});

    const sensitivity = 0.01;
    const friction = 3;

    useFrame((_, delta) => {
        if (!groupRef.current || dragging.current) return;

        const dt = Math.min(delta, 0.05);
        const decay = Math.exp(-friction * dt);
        const movement = (1 - decay) / friction;

        groupRef.current.rotation.x += velocity.current.x * movement;
        groupRef.current.rotation.y += velocity.current.y * movement;

        velocity.current.x *= decay;
        velocity.current.y *= decay;
    });

    function HandlePointerDown(event: ThreeEvent<PointerEvent>) {
        if (event.button !== 0) return;

        event.stopPropagation();
        (event.target as Element).setPointerCapture(event.pointerId);

        dragging.current = true;
        velocity.current = { x: 0, y: 0};

        previous.current = {
            x: event.clientX,
            y: event.clientY,
            time: event.timeStamp,
        };
    }

    function HandlePointerMove(event: ThreeEvent<PointerEvent>) {
        if (!dragging.current || !groupRef.current) return;

        event.stopPropagation();

        const dx = event.clientX - previous.current.x;
        const dy = event.clientY - previous.current.y;
        const dt = Math.max((event.timeStamp - previous.current.time) / 1000, 0.001);

        const rotationX = dy * sensitivity;
        const rotationY = dx * sensitivity;

        groupRef.current.rotation.x += rotationX;
        groupRef.current.rotation.y += rotationY;

        velocity.current = {
            x: Math.max(-15, Math.min(15, rotationX / dt)),
            y: Math.max(-15, Math.min(15, rotationY / dt)),
        };

        previous.current = {
            x: event.clientX,
            y: event.clientY,
            time: event.timeStamp,
        };
    }

    function HandlePointerUp(event: ThreeEvent<PointerEvent>) {
        if (!dragging.current) return;

        event.stopPropagation();
        dragging.current = false;

        if (event.timeStamp - previous.current.time > 100) {
            velocity.current = { x: 0, y: 0}; 
        }

        (event.target as Element).releasePointerCapture(event.pointerId);
    }

    return (
        <group
            ref={groupRef}
            onPointerDown={HandlePointerDown}
            onPointerMove={HandlePointerMove}
            onPointerUp={HandlePointerUp}
            onPointerCancel={() => {
                dragging.current = false;
                velocity.current = { x: 0, y: 0 };
            }}
            onLostPointerCapture={() => {
                dragging.current = false;
            }}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <primitive
                object={scene}
                scale={hovered ? scale * 1.1 : scale}
            />
        </group>
    );
}

export default Model;