import { useParams } from 'react-router-dom'
import React from 'react'

 function Idk() {
    let para= useParams();
  return (
    <div>
        <h2>{para.postId}</h2>
        {/* <h1>404 jhakta</h1> */}
    </div>
  )
}
export default Idk;