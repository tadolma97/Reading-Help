import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function NewPost(){
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>What do you think is the moral of the story?</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Answer" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    )
}

export default NewPost