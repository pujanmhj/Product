import {useState} from 'react'
import Task from './Task'
import Wrapper from "../Common/Wrapper"
function Memo(){
    const[task,setTask] = useState(['Task1','Task2']);
    const [counter, setCounter] = useState(0);
    const increment =()=>{
        setCounter (i => (i+1));
    }
    const addMore =() => {
        setTask(i=> [...i,`Task ${i.length +1}`])
    }
  return (
    <>
    <Wrapper>
    <Task tasks={task}/>
    <br/>
    {counter}
    <button onClick={increment}>+</button> <br />
    <button onClick={addMore}></button>
    </Wrapper>
    </>
  )
}
export default Memo; 