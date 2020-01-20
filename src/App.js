import React, {useState} from "react";
import ToDoList from "./Components/toDoItems";
import './App.css';

function App() {
  const [toDos, setToDos] = useState([
    {todo: 'clean the laundry', checked: false},
    {todo: 'make food for 7aboba', checked: false},
    {todo: 'sleep', checked: false}
  ]);



  function sortItem(arr, itemIndex) {
    if (arr[itemIndex].checked) {
      const removed = arr.splice(itemIndex,1);
      arr.splice(arr.length, 0, removed[0]);
    }
    return arr;
  }

  function updateCheck (index) {
    const newState = [...toDos];
    newState[index].checked = !newState[index].checked; 
    sortItem(newState, index);
    setToDos(newState);
  }

  function updateTodo(value, index) {
    const newState = [...toDos];
    newState[index].todo = value;
    setToDos(newState);

  }


  return (
    <div className="app">
      <h1>Your To Do List</h1>
      {
        toDos.map( 
        (item, index, arr) => 
        <ToDoList item= {item} index={index} key={index} length={arr.length} 
        updateCheck={updateCheck} updateTodo={updateTodo}
        />
        )
      }
    </div>
  );
}

export default App;
