import React from 'react'
import './sidebar.scss'
import { Card, Tab, ListGroup, ThemeProvider } from 'react-bootstrap';

const Sidebar = ({lista, componentHeight}) =>{

    return (
        <Card style={{height:componentHeight, backgroundColor:'#5860A5'}} className="card-color">
            <Card.Body>
                
                    
                    
                    
                        <ListGroup bsPrefix='my-group'>     
                            {
                                (Object.keys(lista).length > 0) ? lista.map((elemento, index) =>(
                                    <ListGroup.Item key={index} href={"#link"+index} action >{elemento.name}</ListGroup.Item>
                                )) : ''                                
                                
                            }            
                        </ListGroup>
                        
                    
                    
                
            </Card.Body>
        </Card>
    )
}

export default Sidebar