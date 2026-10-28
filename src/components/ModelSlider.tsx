import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Clone, useGLTF } from "@react-three/drei";
import type { Group } from "three";

const models = [
    { url: "/models/python-logo.glb", scale: 5 },
    { url: "/models/ts-logo.glb", scale: 5 },
    { url: "/models/html-logo.glb", scale: 5 },
    { url: "/models/css-logo.glb", scale: 5 },
    { url: "/models/cpp-logo.glb", scale: 5 },
];

function SliderModel({url, scale}: {url: string; scale: number}) {
    const { scene } = useGLTF(url);

    return <Clone object={scene} scale={scale} />;
}

function MovingModels() {
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
                        <SliderModel {...model}/>
                    </group>
                );
            })}
        </group>
    );
}

function ModelSlider({ darkness = 0 }: { darkness?: number }) {
    return (
        <div className="relative h-full min-h-0 w-full overflow-hidden">
            <Canvas
                orthographic
                camera={{ position: [0, 0, 10], zoom: 60 }}
                style={{ pointerEvents: "none" }}
            >
                <ambientLight intensity={2 - darkness * 1.3} />

                <directionalLight
                    position={[5, 5, 5]}
                    intensity={3 - darkness * 2}
                />

                <Suspense fallback={null}>
                    <MovingModels />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default ModelSlider;