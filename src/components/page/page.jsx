import React, {createRef, useRef} from 'react'
import './page.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {constants} from "../../constants/constants.js";

import InputFile from '../input-file/inputfile'
import Sidebar from '../sidebar/sidebar'
import Box from '../3d/box/box'
import { Canvas} from '@react-three/fiber'
import MeshSTL from '../3d/box/stl/meshstl';
import Model from '../3d/box/stl/mesh2';
import Box2 from '../3d/box/box2';
import { useCamera } from '@react-three/drei'
import CameraHelper from '../3d/camerahelper/camerahelper';
import Controls from '../3d/controls/controls';
import { WebGLRenderer } from 'three';
import MeshList from '../3d/meshlist/meshlist';
import { Suspense } from 'react'
import { Bounds, ContactShadows, OrbitControls} from '@react-three/drei'
import SelectToZoom from '../3d/selecttozoom/selecttozoom';
import Box3 from '../3d/box/box3'

class Page extends React.Component {   

    constructor(props){
        super(props)
        this.vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)/100
        this.renderer=createRef()

        //this.changeColorMode=this.changeColorMode.bind(this)
        //this.loadingFile=this.loadingFile.bind(this)
        this.state={
            mode:constants.darkMode,
            loadFile:false,
            files:[],
            selected: -1,
        }
    }

    /*onChange = useCallback((id, value) => {
        setItems(prevItems => prevItems.map((item, index) => {
          return index !== id ? item : { value: value }
        }))
      }, []) */
    /*componentDidMount(){
        this.setState({
            ...this.state,
            mode:constants.darkMode
        })
        console.log(this.vw)
    }*/

    /*changeColorMode(){
        if(this.state.mode === constants.darkMode){
            this.setState({
                ...this.state,
                mode:constants.lightMode
            })
        }
        else{
            this.setState({
                ...this.state,
                mode:constants.darkMode
            })
        }
    }*/

    selected=(selectedFile)=>{
        this.setState({
            ...this.state,
            selected:this.state.selected===selectedFile? -1 : selectedFile
        })
    }

    loadingFile=()=>{
        this.setState({
            ...this.state,
            loadFile:!this.state.loadFile
        })
    }

    addFile=(filesToAdd)=>{
        this.setState({
            ...this.state,
            files:this.state.files.concat(filesToAdd),
            loadFile:false
        })
    }

    renameFunc=(filesEdit)=>{
        this.setState({
            ...this.state,
            files:filesEdit
        })
    }

    render(){
        console.log(this.state)
        return(
        <div style={{backgroundColor: '#333131', height:'100vh', paddingTop:'2vh', paddingBottom:'2vh'}} className="font">
            <Container fluid="md" style={{position: 'relative'}}>
            {this.state.loadFile ? <InputFile onSave={this.addFile} ></InputFile> : ''}
            <Row>
                <Col xs={3}>
                    <Sidebar onRename={this.renameFunc} lista={this.state.files} onSelection={this.selected} componentHeight='96vh' indexActive={this.state.selected}/>                                
                </Col>
                <Col xs={9}>
                    <Row>
                        <Card style={{backgroundColor: '#E59F9F'}}>
                            <Card.Body>
                                <Card.Title>Nabla 3D</Card.Title>
                            </Card.Body> 
                        </Card>
                    </Row>
                    <Row style={{marginTop: '50px'}}>
                    {(Object.keys(this.state.files).length > 0)? (<Canvas style={ { height: '75vh' } } camera={{ position: [0, -10, 80], fov: 50 }} dpr={[1, 2]}>
                        
                        <ambientLight />
                        <Suspense fallback={null}>
                            <Bounds fit clip observe margin={1.2}>
                                <SelectToZoom>
                                    
                                    {this.state.files.map((element, index) =>(                                                            
                                        <Box2 url={URL.createObjectURL(element.file)} key={index} selected={index === this.state.selected? true : false} onSelection={this.selected} index={index}/>                        
                                    ))}    
                                                    
                                </SelectToZoom>
                            </Bounds>
                            <ContactShadows rotation-x={Math.PI / 2} position={[0, -35, 0]} opacity={0.2} width={200} height={200} blur={1} far={50} />
                      </Suspense> 
                      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
                      
                      </Canvas>) : ''
                    }
                    </Row>
                        
                    
                </Col>
            </Row>
            <Button style={{backgroundColor: '#D9D9D9', height:'60px', width:'60px', borderRadius:'60px', position: 'absolute', bottom: "0px", right:"0px", color: 'black'}} onClick={this.loadingFile}>+</Button>
            </Container>
            
        </div>
        )
    }
}

export default Page