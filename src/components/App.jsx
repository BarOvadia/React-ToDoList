import React, { useState } from "react";
import Item from "./ToDoItem";
// create newitem.jsx
// create function that target button clicked
// apply iten into list
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function createItem() {
    setItems((prevItems) => [...prevItems, inputText]);
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={inputText} onChange={handleChange} type="text" />
        <button onClick={createItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <Item text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
