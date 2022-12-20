import {PerspectiveCamera } from "three";
import React from "react";
const CameraHelper=()=>{
    const camera = new PerspectiveCamera(90, 1, 1, 3);
    return (<group position={[0,0,0]}>
      <cameraHelper args={[camera]} />
    </group>)
  }

export default CameraHelper