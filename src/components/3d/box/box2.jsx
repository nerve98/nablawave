import React, { Suspense, useRef } from 'react'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { useLoader } from '@react-three/fiber'
import { useCamera } from '@react-three/drei'


const Box2=({url})=> {
    console.log(url)
    const group = useRef()
    const stl = useLoader(STLLoader, url)
    console.log(stl)
    return (
        /*<group ref={group} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.Curve007_1.geometry} material={materials['Material.001']} />
            <mesh castShadow receiveShadow geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} />
        </group>*/
            <mesh geometry={stl} position={[0, 0, 0]}>
                <meshStandardMaterial color={'orange'} />
            </mesh>
    )
}

export default Box2