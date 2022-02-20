import React,{useState} from 'react'
import { v4 } from 'uuid';

export const TodoInput = ({onAdd}) => {
    const [value,setValue]=useState("");
  return (
    <div>
    
      <input type="text"
       value={value} 
      onChange={(e)=>{setValue(e.target.value)}}/>
      <button onClick={()=>{
          if(value){  
      onAdd({ 
         value,
         id:v4(),
        });
       
       setValue("")
          }else{
              console.log("Enter Value")
          }
        }
       }>
       ADD
       </button>
    </div>
  )
}
