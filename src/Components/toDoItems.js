import React, { useState } from "react";

function ToDoList ({item , index, length, updateCheck, updateTodo, updateDelete}) {
    const [inputValue, setInputValue] = useState(item.todo);
    const [editBtnClicked, setEditBtnClicked] = useState(false);

    const isChecked = item.checked ? "checked": "unchecked";
    const spanDisplayed = editBtnClicked ? "hidden": "unhidden" ;
    const inputDisplayed = !editBtnClicked ? "hidden": "unhidden" ;
    const horizentalLineDisplayed = index === length-1 ? "hidden": "";

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
        if(inputValue !== item.todo && inputValue !=='') {
          updateTodo(inputValue, index);
        }    
      }

      function handleDelete (e) {
        updateDelete(index);
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
            <input type="text" className={inputDisplayed} onChange={handleInputValue} value={inputValue} />
            <button  onClick= {handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          


            <hr className={horizentalLineDisplayed}/>
        </div>

    );
}

export default ToDoList;