import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Wrapper from '../Common/Wrapper';
import { useParams } from 'react-router-dom';
import { useState , useEffect} from 'react';
import Product from '../Lib/product';

function Vitra() {
    const[product,]= useState(Product);
    let params = useParams();
    let postId  = params.postId;
    const [filtered,setFiltered] =useState([]);
    useEffect(()=>{
       let tmp_product =product.filter((tmp)=>{
        return tmp.name === postId;
       });
       setFiltered(tmp_product);
    },[]);
    // const  styles={
    //     container:{
    //         display:"flex",
    //         width:"100%",
    //         height:"18rem",
    //         border:"2px solid black",
    //         textAlign: "center",
    //     },
    //     imgs:{
    //         flex:1,
    //         padding: "20px",
    //     },
    //     des:{
    //         flex:1,
    //     }
    // }
    return (
        <Wrapper>
          {
            filtered.length > 0 &&
            <Row>
                <Col>
                  <img src={filtered[0].image} style={{width:"600px"}} />
                </Col>
                <Col>
                  <h1>{filtered[0].name}</h1>
                  <p>{filtered[0].currencyType}:{filtered[0].price}</p>
                  <ul>
                  {
                    filtered[0].description.length > 0 &&
                    filtered[0].description.map((description, key)=>{
                      return (
                        <li key={key}>{description.name}</li>
                      )
                    })
                  }
                  </ul>
                </Col>
            </Row>
          }
        </Wrapper>
    )
}

export default Vitra;