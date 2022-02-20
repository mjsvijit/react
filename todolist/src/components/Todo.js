import React, {useState} from 'react'
import styles from './todo.module.css'
import { TodoInput } from './TodoInput';

export const Todo = ({todo,onDeleteItem,onUpdateTodos}) => {
  let [isStricked, setIsStricked] = useState(false);
  let [isEditModeOn, setIsEditModeOn] = useState(false);

  const onAdd=(newAdd)=>{
    onUpdateTodos({
      ...newAdd,
      id:todo.id
    })
    setIsEditModeOn(false);
  };
  return (
    
    <li className={styles.todoItem}>
    {isEditModeOn ? (
      <TodoInput onAdd={onAdd} />) : (
      <>
      <input type="checkbox" onChange={()=>{
        setIsStricked(!isStricked);
      }}/>
      <span className={isStricked ? styles.strike : styles.normal}> 
  
      {todo.value}
      </span>
      </>
    )}
   
    
    
    
    <button onClick={()=>onDeleteItem(todo)}>Delete</button>
    <button onClick={()=>setIsEditModeOn(!isEditModeOn)}>
    {isEditModeOn ? "Cancel Edit" : "Edit"}</button>
    
    </li>
   
  )
}
