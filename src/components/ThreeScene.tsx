import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Icosahedron } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// 1. CORE ELEMENT: The Wireframe Globe (Aura Coding Kuat)
function CodingGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.1;
      meshRef.current.rotation.x = t * 0.05;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y = -t * 0.2; // Putar arah berlawanan untuk efek kompleks
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* Layer Luar: Jaring-jaring Hexagonal/Icosahedron */}
      <Icosahedron ref={meshRef} args={[1.3, 2]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#64FFDA" // Cyan Neon
          wireframe
          transparent
          opacity={0.4}
        />
      </Icosahedron>
      
      {/* Layer Dalam: Bola Plasma (Efek Energi) */}
      <Sphere ref={coreRef} args={[0.7, 32, 32]}>
        <MeshDistortMaterial
          color="#FF71CE" // Pink Neon
          distort={0.5}
          speed={3}
          roughness={0}
          metalness={1}
          transparent
          opacity={0.2}
        />
      </Sphere>
    </Float>
  );
}

// 2. TECH BITS: Elemen Geometris Kecil
function TechBits() {
  return (
    <>
      {/* Torus sebagai "Orbit" Data */}
      <Float speed={3} rotationIntensity={2} floatIntensity={1}>
        <Torus args={[0.6, 0.02, 16, 100]} position={[3, 1, -2]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial color="#64FFDA" emissive="#64FFDA" emissiveIntensity={2} />
        </Torus>
      </Float>

      {/* Floating Box sebagai "Data Block" */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Box args={[0.3, 0.3, 0.3]} position={[-2.5, -1.2, 0]}>
          <meshStandardMaterial color="#B967FF" wireframe />
        </Box>
      </Float>
    </>
  );
}

// 3. BACKGROUND: Digital Dust (Partikel)
function DigitalDust() {
  const count = 120;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.03} 
        color="#64FFDA" 
        transparent 
        opacity={0.4} 
        sizeAttenuation={true}
      />
    </points>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 -z-10 bg-transparent">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#64FFDA" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#FF71CE" />
        <spotLight position={[0, 5, 0]} intensity={0.5} color="#B967FF" />
        
        <CodingGlobe />
        <TechBits />
        <DigitalDust />
      </Canvas>
    </div>
  );
}