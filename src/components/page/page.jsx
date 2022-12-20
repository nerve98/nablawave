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
            files:[]
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

    
    render(){
        console.log(this.state)
        return(
        <div style={{backgroundColor: '#333131', height:'100vh', paddingTop:'2vh', paddingBottom:'2vh'}} className="font">
            <Container fluid="md" style={{position: 'relative'}}>
            {this.state.loadFile ? <InputFile onSave={this.addFile} ></InputFile> : ''}
            <Row>
                <Col xs={3}>
                    <Sidebar lista={this.state.files} componentHeight='96vh'/>                                
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
                    {(Object.keys(this.state.files).length > 0)? (<Canvas style={ { height: '75vh' } } orthographic camera={{ position: [0, 0, 2], left: -2,
                        right: 2, top: 2, bottom: -2, zoom: 100 }}>
                        <ambientLight />
                        
                        <Controls /> {this.state.files.map((element, index) =>(
                        
                            
                                <Box2 url={URL.createObjectURL(element)} key={index}/>
                            
                            
                        
                        ))} <CameraHelper /></Canvas>) : ''
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