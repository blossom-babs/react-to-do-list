// A TO DO LIST USING HOOKS

import React, { useState } from "react";
import ToDo from "./todoComponents/ToDo";

function App() {
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
            <ToDo
              item={item} />
          ))}
        </ul>
      </div>
    </div >
  );
}

export default App;
