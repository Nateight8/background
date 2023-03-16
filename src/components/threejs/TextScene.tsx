import {
  Text,
  RoundedBox,
  OrbitControls,
  ScrollControls,
} from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

type Props = {};

function TextScene({}: Props) {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <ambientLight intensity={1} color="white" />

        {/* <PerspectiveCamera makeDefault position={[0, 15, 5]} fov={40} /> */}

        <Construction />
      </Canvas>
    </Suspense>
  );
}

export default TextScene;
