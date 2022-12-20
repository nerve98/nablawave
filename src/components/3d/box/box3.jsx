import React, {useState, useLayoutEffect} from 'react'
import * as THREE from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

const Box3=({url})=> {
    const [scene] = useState(() => new THREE.Scene())
    scene.add(new THREE.AxesHelper(5))
    const material = new THREE.MeshPhysicalMaterial({
        color: 0xd9d9d9,
        metalness: 0.25,
        roughness: 0.1,
        opacity: 1.0,
        transmission: 0.99,
        clearcoat: 1.0,
        clearcoatRoughness: 0.25
    })
    const loader = new STLLoader()
    loader.load(
        url,
        function (geometry) {
            const mesh = new THREE.Mesh(geometry, material)
            scene.add(mesh)
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    )
    
    return <primitive object={scene}  />
  }

export default Box3