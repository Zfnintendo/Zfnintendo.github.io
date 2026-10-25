import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model";

interface ModelViewerProps {
    url: string;
    scale?: number;
}

function ModelViewer({url, scale = 1}: ModelViewerProps) {
    return (
        <div className="h-full w-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ touchAction: "none" }}>
                <ambientLight intensity={1.5} />
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={2}
                />

                <Suspense fallback={null}>
                    <Model url={url} scale={scale} />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default ModelViewer;
