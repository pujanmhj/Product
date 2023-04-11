import React, { useContext } from 'react'
import Wrapper from '../Common/Wrapper'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import {CounterContext} from '../Lib/store';
 function Reducer() {
    // const[count,setCount]=useState(0);
    const [state, dispatch]= useContext(CounterContext);

    const increment = ()=>{
        dispatch({type: 'ADD'})
    }
    const decrement =()=>{
        dispatch({type:'SUBTRACT'})
    }
    const reset=()=>{
        dispatch({type:'RESET'})
    }
 
    // const onPress = () =>{
    //     setCount(count+1);
    // }
    // const onDecrese = () =>{
    //     if (count > 0){
    //     setCount(count-1);}
    // }
   return (
    <div>
        <Wrapper>
            <div className='d-flex m-5 p-3 '>
            <Button className='btnbtn-primary ' onClick={()=>{decrement()}}>-</Button>
            <p>{state.counter}</p>
            <Button className='btnbtn-primary' onClick={()=>{increment()}}>+</Button> <br />
            <Button onClick={()=>{
                reset()
            }}> RESET</Button>
            </div>
        </Wrapper>
    </div>
  )
}
export default Reducer;