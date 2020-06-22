import React, { useState } from "react";
import styles from './CreateTodo.module.css';

function CreateTodo({ dispatch }) {
    const [todoTxt, setTodoTxt] = useState("");
    const [isInvalid, setInpValidity] = useState(false);

    const inpChangeHandler = e => {
        setTodoTxt(e.target.value);
        setInpValidity(false);
    };

    const addTodoHandler = e => {
        e.preventDefault();
        if (!todoTxt) {
            setInpValidity(true);
            return;
        }
        dispatch({
            type: "ADD",
            payload: { text: todoTxt, id: Date.now(), done: false }
        });
        setTodoTxt("");
    };

    return (
        <div className={styles["create-todo-container"]}>
            <h4>Create new task</h4>
            <form onSubmit={addTodoHandler}>
                <input type="text" 
                value={todoTxt} 
                maxLength="60"
                placeholder="Write task"
                onChange={inpChangeHandler} />
                <button type="submit">+</button>
            </form>
               {
                    isInvalid ? <span className={styles['error-message']}>Enter todo</span> : ''
               } 
        </div>
    );
}

export default CreateTodo;
