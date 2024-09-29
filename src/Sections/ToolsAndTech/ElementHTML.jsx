import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function HTML() {
  const { scene } = useGLTF("/../../Public/Elements/HTML.glb");

  const HTMLRef = useRef();

  useFrame(() => {
    if (HTMLRef.current) {
      HTMLRef.current.rotation.y += 0.01;
    }
  });

  return <primitive object={scene} ref={HTMLRef} position={[0, 0, 0]} scale={5} />;
}

function ElementHTML() {
  return (
    <Canvas
      camera={{ position: [0, 0, 600], fov: 100 }}
      className="h-[20%] w-h-[20%]"
    >
      <ambientLight />
      <pointLight />
      <Suspense fallback={null}>
        <HTML />
      </Suspense>
      <OrbitControls enableRotate={true} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
    </Canvas>
  );
}

export default ElementHTML;
