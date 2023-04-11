  import React from 'react'
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
  
  function Loading({number}) {
    return (
        <div key={number} >
        <Card style={{ width: '18rem', margin: 10 }}>
          <Card.Img variant="center" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQAAAC3CAMAAADkUVG/AAAAMFBMVEXi4+O8vsDDxce5u73Y2drAwsTMzs/g4eHc3d3l5ubKzM3U1dbExsfHycvZ2tu9v8HtAgBIAAABrUlEQVR4nO3Zy3KjMBAF0IBEjAzY//+3MwkmMH4yWVgUOmeVqmzat1rqBj4+AAAAAAAAAAAAAAAAAAAAAAAAtiWl3BVsT+y6mLuGbUmxCX81Ubf8SF2oRp1UJm31o81dy1akz6lRqvCpVS76uVP63LVsRjOH0uSuZTMWnVLnrmUr3Cn3HM5TKOdD7lre7MkeH6dQTm+sZwu6oe8e/S+1dRVCVbdlHZ7veyM8vkZTG2NhkUyLfBgK+91PnYLpcm0eL8GD8GSxsgaPfKMhzKFU59zVbMJiYR03+csB+nqz1BTaN/MbpOkAHcdU2lDiCvstnaprYXy/di73CXAePItUYkqpvvw95K4wg/o2k68kjvOQLm51SUO4F8p13+Qu862uB88DRY2gFFdlUtYIal/nMR6ggkbQoXmdxyWVYzHXyt3B8yCVQj4NpuO6C+WSShEj6Ga7f+FcwAhK8XUO/yrgM9jawTML+/9iunrwLFLZ+74//H8mex9BK7f7W6cdp7Jyu7+1433/142y6+9CJ6HcEfv6N/phv8cHAAAAAAAAAAAAAAAAAAAAAAAAAOCZP3FZCljyDg9KAAAAAElFTkSuQmCC" />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
              <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
          </Card.Body>
        </Card>
        </div>
    )
  }
  export default  Loading;


  // loop.map((tmpLoading)=>{return (<Loading/>)})