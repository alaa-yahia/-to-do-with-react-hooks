import React, { useState } from 'react';
import { FaRegEdit, FaCheck, FaTrash } from 'react-icons/fa';

function ToDoItem({ item, index, updateCheck, updateTodo, updateDelete }) {
  const [inputValue, setInputValue] = useState(item.todo);
  const [editBtnClicked, setEditBtnClicked] = useState(false);

  const isChecked = item.checked ? 'checked' : 'unchecked';
  const spanDisplayed = editBtnClicked ? 'hidden' : 'unhidden';
  const inputDisplayed = !editBtnClicked ? 'hidden' : 'unhidden';

  function handleEdit(e) {
    setEditBtnClicked(!editBtnClicked);
    if (inputValue !== item.todo && inputValue !== '') {
      updateTodo(inputValue, index);
    }
  }

  function handleDelete(e) {
    updateDelete(index);
  }

  function handleInputValue(e) {
    const value = e.target.value;
    setInputValue(value);
  }

  return (
    <div className="item">
      <div className="itemContainer">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => updateCheck(index)}
        />
        <span className={`${spanDisplayed} ${isChecked}`}> {item.todo} </span>
        <input
          type="text"
          className={inputDisplayed}
          onChange={handleInputValue}
          value={inputValue}
        />
      </div>

      <div className="btnContainer">
        <div onClick={handleEdit}>
          {editBtnClicked ? <FaCheck size={24} /> : <FaRegEdit size={24} />}
        </div>
        <div onClick={handleDelete}>
          <FaTrash />
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
