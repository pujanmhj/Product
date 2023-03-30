import React from 'react'

export default function Pills({genree,key}) {
  return (
    <div className='d-flex flex-wrap m-2 p-2 col-2 justify-content-center' style={{backgroundColor: `${genree.colorCode}`,borderRadius:'10px'}}>
        <p style={{color:'skyblue'}} key={key}>{genree.name}</p>
    </div>
  )
}
