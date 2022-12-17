import React from 'react'
import './page.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {constants} from "../../constants/constants.js";

class Page extends React.Component {   

    constructor(props){
        super(props)
        this.vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)/100
        this.changeColorMode=this.changeColorMode.bind(this)
        this.state={
            mode:{}
        }
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            mode:constants.darkMode
        })
        console.log(this.vw)
    }

    changeColorMode(){
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
    }

    render(){
        return(
        <div style={{backgroundColor: '#333131', height:'100vh', paddingTop:'2vh', paddingBottom:'2vh'}} className="font">
            <Container fluid="md" style={{position: 'relative'}}>
            <Row>
                <Col xs={3}>
                        <Card style={{backgroundColor: '#5860A5', height:'96vh'}}>
                            <Card.Body>
                                <Card.Text >
                                    Some quick example text to build on the panel title and make up the
                                    bulk of the panel's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                </Col>
                <Col xs={9}>
                    <Row>
                        <Card style={{backgroundColor: '#E59F9F'}}>
                            <Card.Body>
                                <Card.Title>Nabla 3D</Card.Title>
                            </Card.Body> 
                        </Card>
                        
                    </Row>
                    <Row>
                        <Button style={{backgroundColor: '#D9D9D9', height:'60px', width:'60px', borderRadius:'60px', position: 'absolute', bottom: "0px", right:"0px", color: 'black'}}>+</Button>
                    </Row>
                </Col>
            </Row>
            </Container>
            
        </div>
        )
    }
}

export default Page