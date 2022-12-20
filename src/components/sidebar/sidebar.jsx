import React from 'react'
import './sidebar.scss'
import { Card, ListGroup} from 'react-bootstrap';

const Sidebar = ({lista, componentHeight, onSelection, indexActive}) =>{

    return (
        <Card style={{height:componentHeight, backgroundColor:'#5860A5'}} className="card-color">
            <Card.Body>
                
                    
                    
                    
                        <ListGroup bsPrefix='my-group'>     
                            {
                                (Object.keys(lista).length > 0) ? lista.map((elemento, index) =>(
                                    <ListGroup.Item key={index} href={"#link"+index} action onClick={(event) => {onSelection(index)}} active={(indexActive===index)? true : false} >{elemento.name}</ListGroup.Item>
                                )) : ''                                
                                
                            }            
                        </ListGroup>
                        
                    
                    
                
            </Card.Body>
        </Card>
    )
}

export default Sidebar