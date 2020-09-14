// A TO DO LIST USING HOOKS

import React, { useState } from "react";
import ToDo from "./ToDoItem"

function ToDoPage() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const newVal = e.target.value;
    setInputText(newVal);
  }

  function updateList() {
    if (inputText === "") {
      return false
    }
    setItems((prevVal) => {
      return [...prevVal, inputText];
    })
    setInputText("");
  }

  function handleForm(e) {
    e.preventDefault();
  }

  function deleteItem(id) {
    console.log(id)
    setItems(prevVal => {
      return prevVal.filter((item, index) => {
        return index !== id
      })
    })
  }

  function handleEdit() {
    console.log(`edit was clicked`)
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form onClick={handleForm}>
          <input type="text" onChange={handleChange} value={inputText} />
          <button onClick={updateList}>
            <span>Add</span>
          </button>
        </form>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDo key={index}
              id={index}
              delete={deleteItem}
              item={item}
              edit={handleEdit} />
          ))}
        </ul>
      </div>
    </div >
  );
}

export default ToDoPage;

