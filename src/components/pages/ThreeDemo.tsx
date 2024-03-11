import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

const ThreeDemo = () => {
  return (
    <Canvas camera={{ position: [0, 5, 5] }}>
      <PerspectiveCamera makeDefault fov={75} position={[0, 2, 10]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 3, 3]} intensity={40} castShadow />
      <Tree />
    </Canvas>
  );
};

interface CubeProps {
  pos?: [number, number, number];
  args?: [number, number, number];
  color?: [number, number, number] | string;
}

const Cube = ({ pos, args, color }: CubeProps) => {
  pos = pos || [0, 0, 0];
  args = args || [1, 1, 1];
  color = color || "white";

  return (
    <mesh position={pos}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Tree = () => {
  const groupRef = useRef<Group>(null);
  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.005;
    groupRef.current.rotation.x += 0.005;
  });

  return (
    <group ref={groupRef}>
      <Cube pos={[0, -2, 0]} args={[1, 3, 1]} color={"#b56143"} />
      <Cube pos={[0, 0.5, 0]} args={[5, 2, 3]} color={"#5bc96d"} />
      <Cube pos={[0, 0.5, 0]} args={[3, 2, 5]} color={"#5bc96d"} />
      <Cube pos={[0, 2, 0]} args={[3, 1, 3]} color={"#5bc96d"} />
      <Cube pos={[0, 3, 0]} args={[3, 1, 1]} color={"#5bc96d"} />
      <Cube pos={[0, 3, 0]} args={[1, 1, 3]} color={"#5bc96d"} />
    </group>
  );
};

export default ThreeDemo;
