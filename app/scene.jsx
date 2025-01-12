"use client";

import { useState, useEffect, Suspense, useMemo, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GCodeLoader } from 'three/examples/jsm/loaders/GCodeLoader';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import {
  OrbitControls,
  Environment,
  Grid,
  GizmoHelper,
  GizmoViewport,
  PivotControls,
  Plane
} from '@react-three/drei';
import { MeshToonMaterial } from 'three';
import Lights from './components/Lights';

export default function Scene({ stl, gcode, setMode, transform, transformCallback }) {
  const [gcodeUrl, setGcodeUrl] = useState(null);
  const meshRef = useRef();

  const StlModel = ({ url }) => {
    if (!url) return null;
    const geometry = useLoader(STLLoader, url);
    return useMemo(() => (
      <PivotControls
        anchor={[0, 0, 0]}
        scale={10}
        autoTransform={true}
        active={true}
        depthTest={false}
        onDrag={(e) => {
          transformCallback(e)
        }}
      // onDragEnd={() => {
      //   if (meshRef.current) {
      //     transformCallback({
      //       position: meshRef.current.position.toArray(),
      //       rotation: meshRef.current.rotation.toArray(),
      //       scale: meshRef.current.scale.toArray()
      //     });
      //   }
      // }}
      >
        <mesh ref={meshRef}
        //  position={transform.position} 
        //  scale={transform.scale}
        >
          <primitive object={geometry} attach="geometry" />
          <meshStandardMaterial color="red" />

        </mesh>
      </PivotControls>
    ), [geometry, transform]);
  };

  const GcodeModel = ({ url }) => {
    if (!url) return null;
    const gcodeObject = useLoader(GCodeLoader, url);
    const material = useMemo(() => new MeshToonMaterial({ color: 0x0000ff }), []);

    useMemo(() => {
      gcodeObject.traverse((node) => {
        if (node.isMesh || node.isLine) {
          node.material = material;
        }
      });
    }, [gcodeObject, material]);

    return (
      <group position={[0, 0, 0]}>
        <primitive object={gcodeObject} position={[0, 2, 0]} scale={[1, 1, 1]} />
      </group>
    );
  };

  useEffect(() => {
    if (gcode) {
      const url = URL.createObjectURL(new Blob([gcode]));
      setGcodeUrl(url);
      setMode('slice');
    }
  }, [gcode, setMode]);

  return (
    <Canvas

      camera={{ fov: 75, near: 0.1, far: 500, position: [20, 60, 55] }}
    >
      <color attach="background" args={['#0f0f0f']} />

      <OrbitControls
        makeDefault  // This is important for GizmoHelper
        minDistance={3}
        maxDistance={300}
      />
      <GizmoHelper
        alignment="top-right"
        margin={[80, 80]}
      >
        <GizmoViewport
          axisColors={['red', 'green', 'blue']}
          labelColor="black"

        />
      </GizmoHelper>
      {!gcodeUrl && (
        <Suspense fallback={null}>
          <StlModel url={stl} />
        </Suspense>
      )}

      <Suspense fallback={null}>
        <group position={[0, 0, 100]}>
          {/* <Box args={[10, 10, 10]} position={[0, 0, 0]} scale={[2, 2, 2]} /> */}
          <GcodeModel url={gcodeUrl} />
        </group>
      </Suspense>

      <Grid
        args={[100, 100]}
        position={[0, 0, 0]}
        scale={[2, 2, 2]}
        cellColor="teal"
        cellSize={5}
        cellThickness={1}
        sectionColor="red"
        sectionSize={10}
        sectionThickness={1}
        fadeStrength={0}
        fadeDistance={500}
      />

      <Plane
        args={[1, 1]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.1, 0]}
        receiveShadow
        scale={[200, 200, 200]}
        color="red"
        dou
      >

        <meshStandardMaterial color="#efefef"
          side={2}
        />

      </Plane>
      <Lights />

      <Environment preset="warehouse" />

    </Canvas>
  );
}