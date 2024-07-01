import { useState } from "react"


const InputComponent = () => {

  let [task,settask]=useState("")
  let [tasklist,settasklist]=useState([])
  
 
  const handletasklist=(e)=>{
    settask(e.target.value)
   
  }
  const handletask=()=>{
    settasklist([...tasklist,task])
   
  }
  const handledelete=()=>{
    settasklist(tasklist-1)
  }
  return (
    <div>
      <input className="input" placeholder="Enter name" value={task} onChange={handletasklist}></input>
      <button className="button" onClick={handletask}>Add</button>
      <button className="delete-button" onClick={handledelete}>Delete</button>

     <ul className="todo-list">
   
   {
     
      tasklist.length>0 ?
      tasklist.map((task)=>(
        <li>{task}</li>
      ))
      :"No tasks found"
     }
  
  
    
    
     </ul>
    </div>
  )
}

export default InputComponent