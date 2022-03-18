import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

function ToDoForm({ insertTodo, todoListLength }) {
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    const value = e.target.value;
    setInputValue(value);
  }

  function handleClick() {
    if (inputValue) {
      const item = { todo: inputValue, checked: false, key: todoListLength };
      insertTodo(item);
      setInputValue('');
    }
  }

  return (
    <div className="form">
      <input
        type="text"
        onChange={handleChange}
        value={inputValue}
        placeholder="Add a task here"
      />
      <div classname="btn" onClick={handleClick}>
        <FaPlusCircle className="icon" size={24} />
      </div>
    </div>
  );
}

export default ToDoForm;
