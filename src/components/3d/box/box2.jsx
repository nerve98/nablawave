import React, {useState} from 'react'
import {STLLoader} from "three/examples/jsm/loaders/STLLoader";
import { useLoader} from '@react-three/fiber'

const Box2=({url, selected, onSelection, index})=> {
    
    const [hovered, setHover] = useState(false)
    //const [active, setActive] = useState(selected)

    console.log(index+": "+selected)

    const geom = useLoader(STLLoader, url)
    console.log(geom)

    return (
            <mesh onClick={(event) => {onSelection(index)}} onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
                <primitive object={geom} attach="geometry"/>
                <meshStandardMaterial color={selected? 'orange' : hovered ? 'yellow' : '#D9D9D9'} />
            </mesh>
            /*<mesh >
                <primitive object={geom} attach="geometry"/>
                <meshStandardMaterial color={'black'} />
            </mesh>*/
            
    )
}

export default Box2