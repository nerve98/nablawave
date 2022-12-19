import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import * as THREE from 'three'
import React, {useState} from 'react'
import { BufferGeometry } from 'three';

class MeshSTL extends React.Component{
    /*const material = new THREE.MeshPhysicalMaterial({
        color: 0xb2ffc8,
        metalness: 0.25,
        roughness: 0.1,
        opacity: 1.0,
        transparent: true,
        transmission: 0.99,
        clearcoat: 1.0,
        clearcoatRoughness: 0.25
    })
    const loader = new STLLoader()
    loader.load(
        file.name,
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
    )*/
    constructor(props){
        super(props)
        
        this.state={
            geometry: new BufferGeometry()
        }
        
        
    }

    componentDidMount(){
        this.loader()
    }

    loader=()=>{
        var stlLoader = new STLLoader()
        stlLoader.parse(this.props.fileUrl, geo => {
            this.setState({
                geometry:geo
            })
        })
        
            
    }

    render(){
        
        console.log(this.props.fileUrl)
        return (
            <mesh geometry={this.state.geometry}>
                <meshStandardMaterial color="#cccccc" />
            </mesh>
        )
    }

    
}

export default MeshSTL