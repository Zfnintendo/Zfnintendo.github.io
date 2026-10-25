import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Clone, useGLTF } from "@react-three/drei";
import { MathUtils } from "three";
import type { Group } from "three";

const models = [
    { url: "/models/python-logo.glb", scale: 5 },
    { url: "/models/ts-logo.glb", scale: 5 },
    { url: "/models/html-logo.glb", scale: 5 },
    { url: "/models/css-logo.glb", scale: 5 },
    { url: "/models/cpp-logo.glb", scale: 5 },
];

function SliderModel({url, scale, hovered,}: {url: string; scale: number; hovered: boolean;}) {
    const { scene } = useGLTF(url);
    const spinRef = useRef<Group>(null);
    const spinSpeed = useRef(0);

    useFrame((_, delta) => {
        spinSpeed.current = MathUtils.damp(spinSpeed.current,hovered ? 0.8 : 0, 5, delta,);

        if (spinRef.current) {
            spinRef.current.rotation.y += spinSpeed.current * delta;
        }
    });

    return (
        <group ref={spinRef}>
            <Clone object={scene} scale={scale} />
        </group>
    );
}

function MovingModels({ hovered }: { hovered: boolean }) {
    const rowRef = useRef<Group>(null);
    const offset = useRef(0);
    const { viewport } = useThree();

    const spacing = 2.5;
    const speed = -0.8;

    // enough models to cover the screen plus an extra offscreen slot.
    const count = Math.ceil(viewport.width / spacing) + 2;

    useFrame((_, delta) => {
        if (!rowRef.current) return;

        const totalWidth = count * spacing;

        offset.current =
            (offset.current + speed * Math.min(delta, 0.05)) % totalWidth;

        rowRef.current.children.forEach((child, index) => {
            child.position.x =
                ((index * spacing - offset.current + totalWidth)
                    % totalWidth)
                - totalWidth / 2;
        });
    });

    return (
        <group ref={rowRef}>
            {Array.from({ length: count }, (_, index) => {
                const model = models[index % models.length];

                return (
                    <group key={index}>
                        <SliderModel {...model} hovered={hovered} />
                    </group>
                );
            })}
        </group>
    );
}

function ModelSlider() {

    const [hovered, setHovered] = useState(false);

    return (
        <div 
            className="group relative isolate h-full min-h-40 w-full overflow-hidden" 
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            >
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

            <Canvas
                orthographic
                camera={{ position: [0, 0, 10], zoom: 60 }}
                style={{ pointerEvents: "none" }}
            >
                <ambientLight intensity={hovered ? 2 : 0.7} />

                <directionalLight
                    position={[5, 5, 5]}
                    intensity={hovered ? 3 : 1}
                />

                <Suspense fallback={null}>
                    <MovingModels hovered={hovered} />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default ModelSlider;