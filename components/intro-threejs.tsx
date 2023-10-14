import React, { useRef, useState, useEffect } from 'react'

import { Canvas, useFrame } from '@react-three/fiber'

interface BoxProps {
  position: [number, number, number];
  rotation: [number, number, number];
  rotationSpeed: number;
}

function Box({ position, rotation, rotationSpeed }: BoxProps) {
  const tref = useRef<any>();
  const [currentRotation, setCurrentRotation] = useState(rotation);
  const [currentPosition, setCurrentPosition] = useState(position);

  useEffect(() => {
    setCurrentRotation(rotation);
    setCurrentPosition(position);
  }, [rotation, position]);

  useFrame(() => {
    if (tref.current) {
      tref.current.rotation.y += rotationSpeed;
      setCurrentRotation([tref.current.rotation.x, tref.current.rotation.y, tref.current.rotation.z]);
      setCurrentPosition([tref.current.position.x, tref.current.position.y, tref.current.position.z]);
    }
  });

  return (
    <mesh {...{ position, rotation }} ref={tref} scale={6}>
      <boxGeometry args={[2, 4, 2]} />
      <meshStandardMaterial color="#1f293f" metalness={0.9} roughness={0.7} envMapIntensity={3} />
    </mesh>
  );
}

export default function IntroThreeJs() {

  const offy = 0.33;

  const [boxes, setBoxes] = useState<{ position: [number, number, number], rotation: [number, number, number], rotationSpeed: number }[]>([
    { position: [0, 0, 0], rotation: [0, 0 - offy, 0], rotationSpeed: 0.0003 },
    { position: [0, 0, 0], rotation: [0, 0.88 - offy, -0.5], rotationSpeed: 0.00006 },
    { position: [0, 0, .1], rotation: [0, -0.68 - offy, 0.5], rotationSpeed: 0.00008 },
  ]);

  return (
    <div className="three-bg h-full w-full opacity-[60%] absolute">
      <Canvas camera={{ fov: 55, position: [0, 0, 15], rotation: [0, 0, 0.62] }}>
        <group>
          <ambientLight intensity={0} />
          <pointLight position={[-10, 0, 15]} intensity={400} />
          <pointLight position={[5, 15, 10]} intensity={300} />
          {boxes.map((box, index) => (
            <Box key={index} position={box.position} rotation={box.rotation} rotationSpeed={box.rotationSpeed} />
          ))}
        </group>
      </Canvas>
    </div>
  );
}
