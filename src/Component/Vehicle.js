import React from 'react'
import { useParams } from 'react-router-dom';    // IT returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path> .
import { useState, useEffect } from 'react';
import Wrapper from '../Common/Wrapper';
import Product from '../Lib/product';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Vehicle() {
  let params = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    let tmp = Object.values(Product).filter((i)=>{return i.kisim === params.productType});
    setFilteredProducts(tmp);
  },[]);
  return (
    <div>
      <Wrapper>
      <div className='d-flex row align-items-center p-2 '>
      {
        Object.values(filteredProducts).length > 0 &&
        filteredProducts.map((product, value)=>{
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
export default Vehicle;
