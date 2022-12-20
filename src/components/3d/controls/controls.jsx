import {useThree, extend, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React, {useRef} from "react"
import Box2 from '../box/box2'
import * as THREE from 'three'

extend({ OrbitControls })
const Controls = () => {
    const {
        camera,
        gl: { domElement },
      } = useThree();
    
      return (<orbitControls args={[camera, domElement]} />);
};

export default Controls