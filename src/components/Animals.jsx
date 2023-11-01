import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Animals(props) {
  const { nodes, materials } = useGLTF('./models/animals.glb');

  return (
    <group {...props} dispose={null}>
      <group position={[135.664, 0, 43.164]} rotation={[-Math.PI / 2, 0, 0.832]} scale={40}>
        <mesh geometry={nodes.Cube003.geometry} material={materials.M_Taipan} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.M_Sparrow} />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials.M_Gecko} />
        <mesh geometry={nodes.Cube003_3.geometry} material={materials.M_Herring} />
        <mesh geometry={nodes.Cube003_4.geometry} material={materials.M_Muskrat} />
        <mesh geometry={nodes.Cube003_5.geometry} material={materials.M_Pudu} />
        <mesh geometry={nodes.Cube003_6.geometry} material={materials.M_Colobus} />
        <mesh geometry={nodes.Cube003_7.geometry} material={materials.M_Inkfish} />
      </group>
    </group>
  );
}

useGLTF.preload('./models/animals.glb');
