import React from 'react'
import '../App.css'
import Card from 'react-bootstrap/Card';
import { Row,Col, Button } from 'react-bootstrap';
// import Wcard from '../Lib/WeatherCard';
 function Weather() {
  return (
    <div className='weather'>
          <input  type="search" placeholder="Search" aria-label="Search"/>
           <button style={{backgroundColor:"#202B3B"}} type="submit">Search</button>
          <div className="theme">
                  <Row>
                    <Col>
                    </Col>
                    <Col>
                    <img src="https://images.unsplash.com/photo-1549849171-09f62448709e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </Col>
                  </Row>
          </div>
        <div className="second">
        <div className="slash">
            <h1>Date</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjatS2cas_Psr2XbTW9t05HNGDqAt0_F2POQ&usqp=CAU" style={{widows:"50px", height:"50px"}}/>
            <p>osdafhosdihkjbshdfowhofhwoefhwph lo</p>
          </div>
          <div className="slash">
            <h1>Date</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjatS2cas_Psr2XbTW9t05HNGDqAt0_F2POQ&usqp=CAU" style={{widows:"50px", height:"50px"}}/>
            <p>osdafhosdihkjbshdfowhofhwoefhwph lo</p>
          </div>    
          <div className="slash">
            <h1>Date</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjatS2cas_Psr2XbTW9t05HNGDqAt0_F2POQ&usqp=CAU" style={{widows:"50px", height:"50px"}}/>
            <p>osdafhosdihkjbshdfowhofhwoefhwph lo</p>
          </div>
          <div className="slash">
            <h1>Date</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjatS2cas_Psr2XbTW9t05HNGDqAt0_F2POQ&usqp=CAU" style={{widows:"50px", height:"50px"}}/>
            <p>osdafhosdihkjbshdfowhofhwoefhwph lo</p>
          </div>
          <div className="p-10">
            <h1>Date</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjatS2cas_Psr2XbTW9t05HNGDqAt0_F2POQ&usqp=CAU" style={{widows:"50px", height:"50px"}}/>
            <p>osdafhosdihkjbshdfowhofhwoefhwph lo</p>
          </div>
              
        </div>
        
     
    <Card className='cart'>
            <Card.Body>
              <div className='d-flex justify-content-between'>
              <Card.Subtitle className="p-2 mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Button className=' p-2p-2'>See More</Button>
              </div>
              <Row>
                <Col>
                </Col>
                <Col>
                <img src="https://images.unsplash.com/photo-1549849171-09f62448709e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
               
                </Col>
              </Row>
            </Card.Body>
    </Card>

    
    </div>
  )
}
export default Weather