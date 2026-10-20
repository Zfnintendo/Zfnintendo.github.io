import { useEffect, useRef, memo } from "react";
import * as THREE from "three";

import vertexShader from "../shaders/liquid.vert.glsl?raw";
import fragmentShader from "../shaders/liquid.frag.glsl?raw";

function LiquidBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
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

    const uniforms = {
        uTime: { value: 0 },
        uResolution: {
            value: new THREE.Vector2(1, 1),
        },
    };

    const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
    });

    const mesh = new THREE.Mesh(geometry, material);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const resize = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;

        if (width === 0 || height === 0) return;

        renderer.setSize(width, height);

        uniforms.uResolution.value.set(
            renderer.domElement.width,
            renderer.domElement.height,
        );
    };
    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    scene.add(mesh);

    const timer = new THREE.Timer();
    timer.connect(document);

    let frameId: number;

    const animate = (timestamp: number) => {
        frameId = requestAnimationFrame(animate);

        timer.update(timestamp);

        uniforms.uTime.value = timer.getElapsed();

        renderer.render(scene, camera);
    };

    frameId = requestAnimationFrame(animate);

    container.appendChild(renderer.domElement);

    return () => {
        cancelAnimationFrame(frameId);

        observer.disconnect();

        timer.disconnect();
        timer.dispose();

        geometry.dispose();
        material.dispose();
        renderer.dispose();

        renderer.domElement.remove();
    }
  })

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    />
  );
}

export default memo(LiquidBackground);