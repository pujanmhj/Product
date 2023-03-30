import React, { useState } from 'react'
import {Outlet} from 'react-router-dom';
function Product() {
    const[outLet]=useState("outletmf");
  return (
    <div> 
        <Outlet context={[outLet]}/>      
    </div>
  )
}
export default  Product