import React from 'react'
import './sidebar.scss'
import { Card, ListGroup, Button, Form} from 'react-bootstrap';
import Item from './item'

const Sidebar = ({lista, componentHeight, onSelection, indexActive, onRename}) =>{
    

    return (
        <Card style={{height:componentHeight, backgroundColor:'#5860A5'}} className="card-color">
            <Card.Body>
                
                    
                    
                    
                        <ListGroup bsPrefix='my-group'>     
                            {
                                (Object.keys(lista).length > 0) ? lista.map((elemento, index) =>(
                                    <Item key={index} lista={lista} index={index} onSelection={onSelection} indexActive={indexActive} onRename={onRename}></Item>
                                )) : ''                                
                                
                            }            
                        </ListGroup>
                        
                    
                    
                
            </Card.Body>
        </Card>
    )
}

export default Sidebar