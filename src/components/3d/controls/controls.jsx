import {useThree, extend, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React, {useRef} from "react"
extend({ OrbitControls })
const Controls = () => {
    const {
        camera,
        gl: { domElement },
      } = useThree();
    
      return <orbitControls args={[camera, domElement]} />;
  };

export default Controls