import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Wrapper from '../Common/Wrapper';
import Product from '../Lib/product';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Vehicle() {
  // let params = useParams();
  // const [carcha,] = useOutletContext();

  // const [product,] = useState(Product);
  // let productType = params.productType;
  // const [filteredType, setFilteredType] = useState([]);
  // useEffect(() => {
  //   let tmp_type = product.filter((tmp) => {
  //     return tmp.kisim === productType;
  //   });
  //   setFilteredType(tmp_type);
  // }, []);
  // let type = params.kisim;
  return (
    <div>
      <Wrapper>
      
      </Wrapper>
    </div>
  )
}
export default Vehicle;

  // {/* <h2>{type}</h2> */}
  // {
  //   filteredType > 0 &&
  //   <div className='d-flex row align-items-center p-2 pd'>
  //     <div className="col-4 d-flex justify-content-center mt-5">
  //       {/* key={value} style={{ width: '18rem', justifyContent:'center',padding:''}} */}
  //       <Card>
  //         <Card.Img variant="top" src={filteredType[0].image} />
  //         <Card.Body>
  //           <Card.Title>
  //             {filteredType[0].name}
  //           </Card.Title>
  //           <Card.Text>
  //             {filteredType[0].currencyType}{filteredType[0].price}
  //           </Card.Text>
  //           <Link className='btn btn-primary' to={`${product.name}/Vitra`}> Visit</Link>
  //         </Card.Body>
  //       </Card>
  //     </div>
  //   </div>
  // }