import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

export default function Pills({genree,key,onPress}) {
  return (
    <div className='d-flex flex-wrap m-2 p-2 col-2 justify-content-center'
     onClick={()=>{onPress(genree.name)}} 
    style={{backgroundColor: `${genree.colorCode}`,borderRadius:'10px'}
    }>
        <p style={{color:'skyblue'}} key={key}>{genree.name} </p>
    </div>
  )
}

Pills.propTypes ={
  genree:propTypes.object,
  key:propTypes.number,
  onPress:propTypes.func,
}