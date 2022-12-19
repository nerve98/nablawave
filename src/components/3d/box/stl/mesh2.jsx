import React, {useRef, useEffect} from 'react';
import {STLLoader} from "three/examples/jsm/loaders/STLLoader";
import {Canvas, useLoader, useThree} from '@react-three/fiber';

const Model = ({url}) => {
    const geom = useLoader(STLLoader, url);

    const ref = useRef();
    const {camera} = useThree();
    useEffect(() => {
        camera.lookAt(ref.current.position);
    });

    return (
        <Canvas>
            <mesh ref={ref}>
                <primitive object={geom} attach="geometry"/>
                <meshStandardMaterial color={"orange"}/>
            </mesh>
            <ambientLight/>
            <pointLight position={[10, 10, 10]}/>
        </Canvas>
    );
};

export default Model