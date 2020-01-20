import React, { useState } from "react";

function ToDoList ({item , index, length, updateCheck, updateTodo, handleDelete}) {
    const [inputValue, setInputValue] = useState('');
    const [editBtnClicked, setEditBtnClicked] = useState(false);

    const isChecked = item.checked ? "checked": "unchecked";
    const spanDisplayed = editBtnClicked ? "hidden": "unhidden" ;
    const inputDisplayed = !editBtnClicked ? "hidden": "unhidden" ;

    function handleEdit(e) {
        //when using state it will update all items 
        //this way works fine
        if (e.target.childNodes[0].nodeValue === "Edit") {
          e.target.childNodes[0].nodeValue = "Done";
        }
        else {
          e.target.childNodes[0].nodeValue = "Edit";
        } 

        setEditBtnClicked(!editBtnClicked);
        
        updateTodo(inputValue, index);
      }

    function handleInputValue(e){
        const value = e.target.value;
        setInputValue(value);

    }

    return (
        <div className="item">
            <input type="checkbox" checked={item.checked} 
            onChange= {() => updateCheck(index)}
            />
            <span className={`${spanDisplayed} ${isChecked}`}> {item.todo} </span>
            <input type="text" className={inputDisplayed} onChange={handleInputValue}  />
            <button  onClick= {handleEdit}>Edit</button>
            <button>Delete</button>

            <hr className={index === length-1 ? "hidden": ""}/>
        </div>

    );
}

export default ToDoList;