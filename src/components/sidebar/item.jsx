import React, {useState} from 'react'
import { ListGroup, Button, Form} from 'react-bootstrap';


const Item = ({lista, index, onSelection, indexActive, onRename})=>{
    const [renameBool, setRenameBool]=useState(false)
    const [valueText, setValueText]=useState('')

    const handleChange=(event)=>{
        setValueText(event.target.value)
    }

    const forSubmit=()=>{
        lista[index].name=valueText+'.stl'
        onRename(lista)
        setRenameBool(false)
    }

    return(
        <ListGroup.Item key={index} href={"#link"+index} action onClick={(e) => {onSelection(index)}} active={(indexActive===index)? true : false} >{!renameBool? <div><span>{lista[index].name}</span> <Button onClick={(e)=>setRenameBool(true)}>Rename</Button></div> : 
            <Form onSubmit={(e)=>{forSubmit()}}><span style={{display:'inline-block'}}><Form.Control onChange={(e)=>handleChange(e)} style={{display:'inline', width:'100px'}}></Form.Control>.stl</span><br/><Button type="submit">Salva</Button><Button onClick={(e)=>setRenameBool(false)}>Annulla</Button></Form>}
        </ListGroup.Item>
    )
}

export default Item