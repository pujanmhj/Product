import React from 'react'
import Wrapper from '../Wrapper'
import { Col, Row } from 'react-bootstrap'
import Create from './create'
import List from './list'
import { useState } from 'react'

function Fruits() {

  const[error,SetError] =useState(0)
  const [fruitList, SetFruitList] = useState([]);
  const [fruits, SetFruits] = useState([]);

  const handleChange = (e) => {
    let value1 = e.target.value;
    let name = e.target.name;
    SetError({});
    SetFruits(i => ({...i, [name] : value1}));
  }

const registerFruits = () => {
    if(fruits.length == 0){
        SetError({
            "name": "Email  or Password is invalid"
            
        })
    }
    else{
      SetFruitList(i => [...i, fruits]);
      //SetFruits([]);  
    }
}

  return (
    <div>
        <Wrapper>
            <h1>FRUITS</h1>
           
            <Row>
            <Col>
        
            <Create
             registerFruits={registerFruits} 
             handleChange={handleChange}
             error={error}/>
            </Col>
            <Col>
            ffffff
            <List fruitList={fruitList}/>
            </Col>
            </Row>
            
        </Wrapper>
    </div>
  )
}
export default  Fruits
