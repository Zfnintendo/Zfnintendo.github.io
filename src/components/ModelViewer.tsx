import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";

interface ModelViewerProps {
    url: string;
    scale?: number;
}

function ModelViewer({url, scale = 1}: ModelViewerProps) {
    return (
        <div className="h-full w-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={1.5} />
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={2}
                />

                <Suspense fallback={null}>
                    <Model url={url} scale={scale} />
                </Suspense>

                <OrbitControls
                    enableZoom={true}
                    enablePan={false}
                    enableRotate={true}
                />
            </Canvas>
        </div>
    );
}

export default ModelViewer;
