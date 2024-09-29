import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function CSS() {
  const { scene } = useGLTF("/../../Public/Elements/CSS.glb");

  const CSSRef = useRef();

  useFrame(() => {
    if (CSSRef.current) {
      CSSRef.current.rotation.y += 0.01;
    }
  });

  return <primitive object={scene} ref={CSSRef} position={[0, 0, 0]} scale={5} />;
}

function ElementCSS() {
  return (
    <Canvas
      camera={{ position: [0, 0, 800], fov: 100 }}
      className="h-[20%] w-h-[20%]"
    >
      <ambientLight />
      <pointLight />
      <Suspense fallback={null}>
        <CSS />
      </Suspense>
      <OrbitControls enableRotate={true} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
    </Canvas>
  );
}

export default ElementCSS;
