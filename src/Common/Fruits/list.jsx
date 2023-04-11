import {memo} from "react";
import React from 'react'

function List({fruitList}) {
  console.log("fruitList",fruitList);
  return (
    <div>
      <p>list</p>
    
        <ul>
          {
            Object.values(fruitList).length > 0 &&
             fruitList.map((fruit, key)=>{
              return (
                <li key={key}>{fruit.name}</li>
              )
             })
          }
        </ul>
      
    </div>
  )
}

export default memo(List);
