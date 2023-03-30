import React from 'react'
import {memo} from 'react'
 function Task({tasks}) {
  return (
    <div>
        <ul>
            {
                tasks.map((task,key)=>{
                    return(
                        <li key={key}>{task}</li>
                    )
                }
                )
            }
        </ul>
    </div>
  )
}
export default memo(Task)