import React, { useState } from "react";
import InputArea from "./InputArea";
import TodoItem from "./TodoItem";

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((prevValue) => {
      return [...prevValue, item];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((item) => (
            <TodoItem text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
