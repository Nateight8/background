import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

type Props = {};

function Construction({}: Props) {
  const groupRef = useRef(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.01;
      groupRef.current.rotation.y += 0.01;
      //   groupRef.current.rotation.z += 0.05;
    }
  });
  return (
    <group ref={groupRef} position={[-2, 0, 0]}>
      <Text
        position={[0, 0, 0]}
        fontSize={1}
        font="/path/to/font.json"
        anchorX="center"
        anchorY="middle"
        color="white"
        rotation={[0, 0, 0]}
      >
        Construct
      </Text>
      <Text
        position={[2.3, 0, -1.5]}
        fontSize={1}
        anchorX="center"
        anchorY="middle"
        color="white"
        rotation={[0, Math.PI / 2, 0]}
      >
        Design
      </Text>
      <Text
        position={[0, -0.5, -1.5]}
        fontSize={1}
        anchorX="center"
        anchorY="middle"
        color="white"
        rotation={[Math.PI / 2, 0, 0]}
      >
        Build
      </Text>
    </group>
  );
}

export default Construction;
