import React from "react";
import { useState } from "react"; //hooks introduce after 16.8 version

function Todo() {
    const [inputValue, setInputValue] = useState("")
    const [todoItems, setTodoItems] = useState([])

    const handleInputOnChange = (event) => {
        const value = event.target.value
        setInputValue(value)
    }

    const storeTodoItem = () => { 
        const existingTodoItems = [...todoItems]
        existingTodoItems.push({
            id: todoItems.length + 1,
            value: inputValue
        })
        setTodoItems(existingTodoItems)
    }

    const deleteTodoItem = (targetItem) => {
        const updateTodoList = todoItems.filter(item => item.id !== targetItem.id)
        setTodoItems(updateTodoList)
    }

    return(
        <div className="todo-app">
        <div className="app-header">
            <p>Todo App</p>
        </div>

        <div className="app-body">
            <div className="input-container">
                <input type="text" onChange={handleInputOnChange} value={inputValue}></input>
                <button onClick={storeTodoItem}>Add Item</button>
            </div>
            <div className="todo-list">
                {
                    todoItems.map((item, index) => <li className="todo-item">{item.value}<button onClick={() => deleteTodoItem(item)}>&#10005;</button></li>)
                }
            </div>
        </div>
    </div>
    )
}

export default Todo
