import React, { useState } from 'react';
import TodoForm from './Component/TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todos from './Todos';
import TodoEditing from './Component/TodoEditing';
uuidv4();

function TodoWarper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className='todoWarper'>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <TodoEditing key={todo.id} todoTask={editTask} title={todo} />
        ) : (
          <Todos
            key={todo.id}
            task={todo}
            toggleCompleted={toggleCompleted}
            toggleDelete={toggleDelete}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}

export default TodoWarper;
