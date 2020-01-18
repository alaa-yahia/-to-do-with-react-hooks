import React from "react";

function ToDoList ({item , index, length, handleChange, handleEdit, handleDelete}) {
    return (
        <div className="item">
            <input type="checkbox" checked={item.checked} 
            onChange= {() => handleChange(index)}
            />
            <span className={item.checked ? "checked": "unchecked"}> {item.todo} </span>
            <button>Edit</button>
            <button>Delete</button>
            <hr className={index === length-1 ? "hidden": ""}/>
        </div>

    );
}

export default ToDoList;