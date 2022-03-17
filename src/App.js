import React, {useState} from "react";
import ToDoList from "./Components/toDoItems";
import ToDoForm from "./Components/toDoForm";
import './App.css';

function App() {
  const [toDos, setToDos] = useState([
    {todo: 'Clean the house', checked: false, key:0},
    {todo: 'Feed the cat', checked: false, key:1},
    {todo: 'Sleep', checked: false, key:2}
  ]);

  function sortItem(arr, itemIndex) {
    if (arr[itemIndex].checked) {
      const removedItem = arr.splice(itemIndex,1);
      arr.splice(arr.length, 0, removedItem[0]);
    }
    return arr;
  }

  function insertTodo(item) {
    const newState = [...toDos];
    newState.unshift(item);
    setToDos(newState);
  }

  function updateCheck (index) {
    const newState = [...toDos];
    newState[index].checked = !newState[index].checked; 
    const sortedNewState = sortItem(newState, index);
    setToDos(sortedNewState);
  }

  function updateTodo(value, index) {
    const newState = [...toDos];
    newState[index].todo = value;
    setToDos(newState);
  }

  function updateDelete(index) {
    const newState = [...toDos];
    newState.splice(index,1)
    setToDos(newState);
  }

  return (
    <div className="app">
      <h1>Your To Do List</h1>
      <ToDoForm insertTodo={insertTodo} todoListLength={toDos.length}/>
      {
        toDos.map( 
        (item, index, arr) => 
        <ToDoList item= {item} index={index} key={item.key} length={arr.length} 
        updateCheck={updateCheck} updateTodo={updateTodo} updateDelete={updateDelete}
        />
        )
      }
    </div>
  );
}

export default App;
