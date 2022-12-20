import React, { useRef, useFrame} from 'react'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { useLoader } from '@react-three/fiber'

const Box2=({url})=> {


    console.log(url)

    const geom = useLoader(STLLoader, url)

    return (
        
            <mesh >
                <primitive object={geom} attach="geometry"/>
                <meshStandardMaterial color={'black'} />
            </mesh>
            
    )
}

export default Box2