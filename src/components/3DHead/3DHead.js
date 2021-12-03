import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OrbitControls } from "@react-three/drei";

const Head = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <sphereGeometry attach="geometry" args={[0, 0, 0]} />
      <Suspense fallback={<Loading />}>
        <HeadModel />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={-2}
        />
      </Suspense>
    </Canvas>
  );
};

const HeadModel = () => {
  const materials = useLoader(MTLLoader, "head.mtl");
  const scene = useLoader(OBJLoader, "head.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  console.log(scene);
  return <primitive object={scene} scale={20} position={[-7, -1, 0]} />;
};

const Loading = () => {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
};

export default Head;
