import { useEffect, useRef } from "react";
import * as THREE from "three";

function LiquidBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    
    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(
        -1, 1,
        1, -1,
        0, 1
    );

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
    })

    const geometry = new THREE.PlaneGeometry(2, 2);

    container?.appendChild(renderer.domElement);

    return () => {
        renderer.dispose();
        renderer.domElement.remove();
    }
  })

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10"
    />
  );
}

export default LiquidBackground;