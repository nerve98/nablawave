import React, { useRef, useFrame} from 'react'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { useLoader } from '@react-three/fiber'
import { useCamera } from '@react-three/drei'
import { createContext } from 'react';

const Box2=({url})=> {

    /*const boxRef = useRef(null);

    useFrame(() => {
      boxRef.current.rotation.x += 0.005;
      boxRef.current.rotation.y += 0.01;
    });*/

    console.log(url)
    const ref = useRef()
    const stl = useLoader(STLLoader, url)
    console.log(stl)
    return (
        /*<group ref={group} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.Curve007_1.geometry} material={materials['Material.001']} />
            <mesh castShadow receiveShadow geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} />
        </group>*/
            <mesh geometry={stl}  ref={ref}>
                <meshStandardMaterial color={'black'} />
            </mesh>
            
    )
}

export default Box2