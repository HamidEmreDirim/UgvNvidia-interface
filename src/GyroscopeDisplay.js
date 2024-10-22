import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const GyroscopeCube = ({ gyroData }) => {
  const cubeRef = useRef();

  // Use frame to animate the cube based on the gyroscope data
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = gyroData.x;  // Roll
      cubeRef.current.rotation.y = gyroData.y;  // Pitch
      cubeRef.current.rotation.z = gyroData.z;  // Yaw
    }
  });

  return (
    <mesh ref={cubeRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const GyroscopeDisplay = ({ gyroData }) => {
  return (
    <Canvas style={{ width: '200px', height: '200px' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <GyroscopeCube gyroData={gyroData} />
    </Canvas>
  );
};

export default GyroscopeDisplay;
