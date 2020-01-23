import React, { useState } from "react";

function ToDoForm ({insertTodo, todoListLength}) {
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        const value = e.target.value;
        setInputValue(value);
    }

    function handleClick() {
        if(inputValue) {
            const item = {todo: inputValue, checked: false, key: todoListLength};
            insertTodo(item);
            setInputValue('');
        }
    }

    return (
    <div className="form">
        <input type="text" onChange={handleChange} value={inputValue} />
        <button onClick={handleClick}>Add</button>
    </div>
 );
}

export default ToDoForm;