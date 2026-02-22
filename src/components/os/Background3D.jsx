import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, Torus, Icosahedron, Dodecahedron, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, rotation, color, type, scale = 1 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation[0] + time * 0.3;
      meshRef.current.rotation.y = rotation[1] + time * 0.45;
    }
  });

  return (
    <Float speed={3.5} rotationIntensity={1.2} floatIntensity={1.5}>
      {type === 'sphere' && (
        <Sphere ref={meshRef} position={position} args={[1 * scale, 32, 32]}>
          <MeshDistortMaterial color={color} speed={2} distort={0.4} factor={0.6} opacity={0.25} transparent />
        </Sphere>
      )}
      {type === 'box' && (
        <Box ref={meshRef} position={position} args={[1.5 * scale, 1.5 * scale, 1.5 * scale]}>
          <meshStandardMaterial color={color} opacity={0.15} transparent />
        </Box>
      )}
      {type === 'torus' && (
        <Torus ref={meshRef} position={position} args={[1 * scale, 0.4 * scale, 16, 100]}>
          <meshStandardMaterial color={color} opacity={0.2} transparent />
        </Torus>
      )}
      {type === 'icosahedron' && (
        <Icosahedron ref={meshRef} position={position} args={[1 * scale, 0]}>
          <meshStandardMaterial color={color} opacity={0.2} transparent wireframe />
        </Icosahedron>
      )}
      {type === 'dodecahedron' && (
        <Dodecahedron ref={meshRef} position={position} args={[1 * scale, 0]}>
          <meshStandardMaterial color={color} opacity={0.15} transparent />
        </Dodecahedron>
      )}
      {type === 'octahedron' && (
        <Octahedron ref={meshRef} position={position} args={[1 * scale, 0]}>
          <meshStandardMaterial color={color} opacity={0.2} transparent />
        </Octahedron>
      )}
    </Float>
  );
};

const Background3D = () => {
  const shapes = useMemo(() => [
    // Main shapes - now "little bit big"
    { type: 'sphere', position: [-10, 8, -6], rotation: [0, 0, 0], color: '#ff71ce', scale: 2.2 }, 
    { type: 'box', position: [12, -7, -10], rotation: [0.5, 0.5, 0], color: '#01cdfe', scale: 2 },  
    { type: 'torus', position: [-8, -10, -12], rotation: [1, 0, 0.5], color: '#b967ff', scale: 1.8 }, 
    
    // Geometric shapes
    { type: 'icosahedron', position: [0, 12, -15], rotation: [0, 1, 0], color: '#fffb96', scale: 2.5 },   
    { type: 'dodecahedron', position: [15, 15, -18], rotation: [0.3, 0.3, 0.3], color: '#05ffa1', scale: 2.2 },    
    { type: 'octahedron', position: [-18, -3, -10], rotation: [0.2, 0.5, 0.8], color: '#ff71ce', scale: 2 },

    // Ambient fillers
    { type: 'sphere', position: [20, 4, -22], rotation: [0, 0, 0], color: '#b967ff', scale: 1.6 },
    { type: 'box', position: [-22, 15, -18], rotation: [0.8, 0.2, 0.4], color: '#01cdfe', scale: 1.7 },
    { type: 'torus', position: [8, -15, -12], rotation: [0.5, 1, 0.3], color: '#05ffa1', scale: 1.5 },
    
    // Small background pieces
    { type: 'icosahedron', position: [12, -20, -25], rotation: [0.1, 0.1, 0.1], color: '#fffb96', scale: 1.4 },
    { type: 'octahedron', position: [-28, -12, -20], rotation: [0.5, 0.5, 0.5], color: '#ff71ce', scale: 1.3 },
    { type: 'dodecahedron', position: [28, -7, -25], rotation: [0, 0, 0], color: '#01cdfe', scale: 1.4 },
  ], []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 bg-transparent">
      <Canvas camera={{ position: [0, 0, 20], fov: 65 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[12, 12, 12]} intensity={1.3} />
        <pointLight position={[-12, -12, 12]} intensity={0.8} />
        <pointLight position={[0, 0, 12]} intensity={0.6} />
        {shapes.map((shape, idx) => (
          <FloatingShape key={idx} {...shape} />
        ))}
      </Canvas>
    </div>
  );
};

export default Background3D;
