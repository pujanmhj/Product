import React from 'react'
import Wrapper from '../Common/Wrapper';
import Carousel from 'react-bootstrap/Carousel';
//import saman from '../Lib/product';
import ProductContext from '../Providers/ProductProvider';
import { useState, useContext } from 'react';
import Vitra from './Vitra';
import {Card,Button, NavLink} from 'react-bootstrap';
import {Link} from 'react-router-dom';

 function Home() {
  var samans = useContext(ProductContext);
  const [saman, setSaman] = useState(samans);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className=''>
      <Wrapper>
        <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1622185135505-2d795003994a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="bike"
        />
        <Carousel.Caption>
          <h3>BIKES</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="car"
        />

        <Carousel.Caption>
          <h3>Sexy Cars</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1503434396599-58ba8a18d932?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Scooter"
        />

        <Carousel.Caption>
          <h3>Beautiful Scooter</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
      <div className='d-flex row align-items-center p-2 pd'>
        {
        saman.map((product, value)=>{
          return(
            <div className="col-4 d-flex justify-content-center mt-5">
            <Card  key={value} style={{ width: '18rem', justifyContent:'center',padding:''}}>
              <Card.Img variant="top" src={product.image}/>
              <Card.Body>
          <Card.Title>
            {product.name}
          </Card.Title>
          <Card.Text>
            {product.currencyType}{product.price}
          </Card.Text>
          <Link className='btn btn-primary' to={`${product.name}/Vitra`}> Visit</Link>
          </Card.Body>
            </Card> 
            </div>
          )
        })
      }
      </div>
       
     
      
      </Wrapper>
    </div>
  )
}
export default Home;



      
     