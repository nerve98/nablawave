import React, {useState, useRef} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

function InputFile({onSave}) {
    const [validated, setValidated] = useState(false);
    const inputElement = useRef();

    const handleSubmit = (event) => {
        /*const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          onSave(inputElement.current.files[0])
        }*/
        event.preventDefault();
        var files=[]
        for(var file of inputElement.current.files){
            files=files.concat([file])
        }
        //console.log(files)
        onSave(files)
        //setValidated(true);
      }
    

    
    return (
            
        <Card style={{padding: '50px', backgroundColor: '#FAFAFA', position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
            <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Seleziona un file con estensione STL</Form.Label>
                        <Form.Control ref={inputElement} type="file" required accept='.stl' multiple>
                        
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Seleziona un file
                        </Form.Control.Feedback>
                    </Form.Group>

                            
                    <Button variant="primary" type="submit">
                        Carica
                    </Button>
                </Form>
            </Card.Body>
        </Card>

    )
    
}


export default InputFile