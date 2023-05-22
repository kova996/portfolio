import { useEffect, useRef, Suspense } from "react";
import { useLoader, useThree, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { AnimationMixer } from "three";
import { Canvas } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    [name: string]: THREE.Mesh;
  };
  materials: {
    [name: string]: THREE.MeshStandardMaterial;
  };
};

type ModelProps = {
  url: string;
};

const Model: React.FC<ModelProps> = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url) as GLTFResult;
  const mixer = useRef<AnimationMixer>();
  const { animations } = gltf;
  const { clock } = useThree();

  useEffect(() => {
    mixer.current = new AnimationMixer(gltf.scene);
    if (animations && animations.length) {
      animations.forEach((clip) => {
        mixer.current?.clipAction(clip).play();
      });
    }
  }, [animations, gltf.scene]);

  useFrame((state, delta) => mixer.current?.update(delta));

  return (
    <primitive object={gltf.scene} position={[0, -0.75, 3.4]} dispose={null} />
  );
};

type SceneProps = {
  modelPath: string;
};

const Scene: React.FC<SceneProps> = ({ modelPath }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas>
        <ambientLight />
        <Suspense fallback={null}>
          <Model url={modelPath} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
