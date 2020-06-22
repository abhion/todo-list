import React, { useReducer } from "react";
import List from "./List";
import './App.css';
import { todoReducer } from '../reducers/todoReducer';

export default function App() {
  const inititalTodo = [
    // {id: 1, text: 'Pickup Apples', done: false},
    // { id: 2, text: 'Speak to Jane Foster', done: false }, 
    // { id: 3, text: 'Hunt the brown fox', done: true },
    // { id: 4, text: 'Jump over the fence', done: false }
  ];
  const [todoList, dispatch] = useReducer(todoReducer, inititalTodo);
  return (
    <div className="App">
      <div className="app-container">
        <div className="description">
          <div className="desc-content">
            <h2>KHALON</h2>
            <p>
              We create cutting edge tech for human <br /> collaboration
        </p>
          </div>
        </div>
        <div className="todo-list-container">
          <div className="todo-list-header">
            <h2>To-Do list</h2>
            <button className="clear-btn" onClick={e => dispatch({type: 'CLEAR'})}>Clear List</button>
          </div>
          <List todoList={todoList} dispatch={dispatch} />
        </div>
      </div>

    </div>
  );
}

