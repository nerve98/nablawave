import {useThree, extend, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React, {useRef, useState, useCallback} from "react"
import Box2 from '../box/box2'
import * as THREE from 'three'
import Controls from "../controls/controls";
import CameraHelper from '../camerahelper/camerahelper';
import { Canvas } from '@react-three/fiber'


const MeshList = ({files}) => {
   console.log("MeshList")
   const [items, setItems] = useState(files)

   const onChange = useCallback((id, url) => {
    setItems(prevItems => prevItems.map((item, index) => {
      return index !== id ? item : { url: url }
    }))
  }, []) 

    return (
        <group >
        {files.map((element, index) =>
            (<Box2 url={URL.createObjectURL(element)} key={index} id={index} onChange={onChange}/>)
        )}</group>
        
      
    );
};

export default MeshList