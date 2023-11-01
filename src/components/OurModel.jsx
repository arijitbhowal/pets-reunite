import React from 'react';
import { Canvas } from "@react-three/fiber";
import { useGLTF, PresentationControls, Stage } from "@react-three/drei";
import './OurModel.css';

function Model(props) {
    const { scene } = useGLTF('./models/animals.glb');
    return <primitive object={scene} {...props} />;
}

const OurModel = () => {
  return (
    <div className='canvas'>
      <Canvas dpr={[1,1]} shadows camera={{fov: 45}} style={{position:"relative"}}>
        <color attach="background" args={['#D7AB9D']} />
        <ambientLight intensity={3} />
        <PresentationControls speed={1} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={null}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default OurModel;
