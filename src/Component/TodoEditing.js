import React, { useState } from 'react';

const TodoEditing = ({ todoTask, title }) => {
  const [value, setValue] = useState(title.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    todoTask(value, title.id);
    setValue('');
  };

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Update Task?"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className="btn-todo" type="submit">
        Update
      </button>
    </form>
  );
};

export default TodoEditing;
