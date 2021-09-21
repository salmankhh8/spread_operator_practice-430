import React, { useState } from "react";

function App() {
  const [listItem, setListItem] = useState("");
  const [items, setItems] = useState([]);
  function addList(event) {
    const newValue = event.target.value;
    setListItem(newValue);
  }
  function addItem() {
    setItems((prevItem) => {
      return [...prevItem, listItem];
    });
    setListItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={addList}
          name="lItem"
          value={listItem}
          placeholder="Add List Item"
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
