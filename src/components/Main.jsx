import React, { useState } from "react";
import "../components/Main.css";

export default function Main() {
  const [Inputer, setInputer] = useState();
  const [Item, setItem] = useState([]);
  const e = (event) => {
    setInputer(event.target.value);
  };

  const list = () => {
    setItem((oldItems) => {
      return [...oldItems, Inputer];
    });
    setInputer("");
  };

  const deleteItem = (id) => {
    setItem((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="page">
      <div className="main">
        <div className="text">
          <p>To Do List</p>
        </div>
        <div className="input">
          <input value={Inputer} onChange={e} placeholder="Add Item" />
          <button onClick={list}>
            <img src={require("../Images/add.png")} width={35} />
          </button>
        </div>
        <div className="list">
          <ul>
            {Item.map((itemval, index) => {
              return (
                <li key={index}>
                  <span
                    onClick={() => {
                      deleteItem(index);
                    }}
                  >
                    <img
                      src={require("../Images/delete-button.png")}
                      width={30}
                    />
                  </span>
                  {itemval}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
