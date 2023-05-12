import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

function Todos({task ,toggleCompleted , toggleDelete,editTodo}) {
  return (
    <div className='todos'>
      <p  className={` ${task.completed ? "completed" : ""}`} >{task.task}</p>
      <div className='todos__icons'>
      <FontAwesomeIcon icon={faCircleCheck}
      style={{color:"orange"}}
      className='todos__icon--item'
      onClick={()=>{toggleCompleted(task.id)}} 
/>
      <FontAwesomeIcon icon={faPenToSquare} 
      className='todos__icon--item' 
      onClick={()=>{editTodo(task.id)}}
      style={{color:"blue"}}
      />
        <FontAwesomeIcon icon={faTrash} 
        onClick={()=> toggleDelete(task.id)}
      style={{color:"red"}}
      className='todos__icon--item' />
      </div>
    </div>
  )
}

export default Todos
