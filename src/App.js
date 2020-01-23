import React, {useState} from "react";
import ToDoList from "./Components/toDoItems";
import ToDoForm from "./Components/toDoForm";
import './App.css';

function App() {
  const [toDos, setToDos] = useState([
    {todo: 'clean the laundry', checked: false},
    {todo: 'make food for 7aboba', checked: false},
    {todo: 'sleep', checked: false}
  ]);


  function sortItem(arr, itemIndex) {
    if (arr[itemIndex].checked) {
      const removedItem = arr.splice(itemIndex,1);
      arr.splice(arr.length, 0, removedItem[0]);
    }
    return arr;
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
      <ToDoForm />
      {
        toDos.map( 
        (item, index, arr) => 
        <ToDoList item= {item} index={index} key={index} length={arr.length} 
        updateCheck={updateCheck} updateTodo={updateTodo} updateDelete={updateDelete}
        />
        )
      }
    </div>
  );
}

export default App;
