import React, { useState } from 'react'
import {Outlet} from 'react-router-dom';  //used in parent route elements to render their child route elements
function Product() {
    const[outLet]=useState("{}");   
  return (
    <div> 
        <Outlet context={[outLet]}/>      
    </div>
  )
}
export default  Product