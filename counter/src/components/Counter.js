import React, {Fragment, useState} from 'react'

export const Counter = (props) => {
   const [count,setCount]= useState(0);
   console.log(count);
   let increment=(count)=>{
       setCount(count+1)
   }
   let Decrement=(count)=>{
      setCount(count-1)
   }
  return (
      
    <div> 
    <h1>{props.name}</h1>
    <h2>{count}</h2>
    <button onClick={()=>increment(count)}>Increment</button>
    <button onClick={()=>Decrement(count)}>Decrement</button>
    <button onClick={()=>setCount(count*2)}>Double</button>
   </div>
  
  )
}
