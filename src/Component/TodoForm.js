import React,{useState} from 'react'

const TodoForm=({addTodo})=> {
    const [value ,setValue] = useState()
    const handleSubmit =(e)=>{
      e.preventDefault()
      addTodo(value);
      setValue("")
    }
  
  return (
    <form className='todoForm' onSubmit={handleSubmit} >
      <input type="text" value={value} placeholder='What is the task today?' required onChange={(e)=>{setValue(e.target.value)}}/>
      <button className='btn-todo' type='submit'>Add Todo</button>
    </form>
  )
}

export default TodoForm
