import React, { useState } from 'react'
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Wrapper from '../Common/Wrapper'
 function Contact() {
  const  styles={
    container:{
        display:"flex",
        width:"100%",
        height:"18rem",
       
        textAlign: "center",
    },
    one:{
        flex:1,
        
    },
    two:{
        flex:1,
    }
}
const[error,setError]=useState({});
 const onPress=()=>{
      return(
        setError({
          "Email":"Empty Username",
          "Password":"Empty Password",
          "message":"Write Something"
        })
      )
    }
  return (
   
    <div>
      <Wrapper>
        <div style={styles.container}>
          <div style={styles.one}>
          <Figure>
      <Figure.Image
        width={200}
        height={250}
        alt="171x180"
        src="https://media.istockphoto.com/id/1371081916/photo/content-wording-on-wooden-cubes-with-speech-bubbles.jpg?s=612x612&w=is&k=20&c=xbkU_q8mKqkFH2lkdxsp3kouqThsC4gyW8w7NgZLWEU="
      />
      <Figure.Caption>
        We fulfill all your feed back and try to improve!!
      </Figure.Caption>
    </Figure>
          </div>
          <div style={styles.two}>
          {/* <Form> */}
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        {
          Object.values(error).length > 0 &&
          error.hasOwnProperty("Email") &&
              <span style={{color:"red"}}>{error.Email}</span>
          
        }

        <Form Group as={Col} controlId="formGridPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" />
          {
            Object.values(error).length>0 &&
            error.hasOwnProperty("Password")&&
            <span style={{color:"red"}}>{error.Password}</span>
          }
        </Form>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Message</Form.Label>
        <Form.Control tabindex="4"  placeholder="Free to write" />
        {
          Object.values(error).length > 0&&
          error.hasOwnProperty("message")&&
          <span style={{color:"red"}}>{error.message}</span>
        }
      </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" onClick={(()=>{onPress()})}>
        Submit
      </Button>
    {/* </Form> */}

          </div>
        </div>
      </Wrapper>
    </div>
  )
}
export default Contact;



   