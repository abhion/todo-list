import React from "react";
import CreateTodo from "./CreateTodo";
import styles from './List.module.css';

function List({ todoList, dispatch }) {
    const handleCheckChange = (e, item) => {
        e.target.checked
            ? dispatch({ type: "DONE", payload: item })
            : dispatch({ type: "PENDING", payload: item });
    };
    const deleteTodoItemHandler = item => {
        dispatch({ type: "DELETE", payload: item });
    };
    const todoListEl = todoList.map(item => {
        return (
            <li key={item.id}>
                <input
                    type="checkbox"
                    className={styles['todo-checkbox']}
                    id={item.id}
                    checked={item.done}
                    onChange={e => handleCheckChange(e, item)}
                />
                <label htmlFor={item.id}>
                    <span className={styles['custom-checkbox']} />
                    <span className={styles['label-text']}>{item.text}</span>
                </label>
                <span className={styles['delete-cross']} onClick={e => deleteTodoItemHandler(item)}>x</span>
            </li>
        );
    });

    const noItems = <div className={styles['no-items']}>No items</div>

    return (
        <div className={styles['list-content']}>
            {
                todoListEl.length ? 
                <ul className={styles.list}>{todoListEl}</ul>
                :
                noItems
            }
            <CreateTodo dispatch={dispatch} />
        </div>
    );
}

export default List;
