import React from "react";
import { useState } from "react"; //hooks introduce after 16.8 version

function Todo() {
    const [inputValue, setInputValue] = useState("")
    const [todoItems, setTodoItems] = useState([])

// useEffect(() => {}, []) componentDidMount()
// useEffect(() => {}) componentDidUpdate()

    const handleInputOnChange = (event) => {
        const value = event.target.value
        setInputValue(value)
    }

    const storeTodoItemDB = (itemToStore) => { //local storage only store primitive type data only
        localStorage.setItem("Todo State: ", JSON.stringify(itemToStore))
    }

    const storeTodoItem = () => {
        const checkDuplication = todoItems.find(item => item.value === inputValue) //check duplication
        if(checkDuplication) {
            return alert("Duplication not allow")
        }

        const existingTodoItems = [...todoItems]
        existingTodoItems.push({
            id: todoItems.length + 1,
            value: inputValue
        })

        storeTodoItemDB(existingTodoItems)
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
                    todoItems.map((item, index) => <li className="todo-item" key={item.id}>{item.value}<button onClick={() => deleteTodoItem(item)}>&#10005;</button></li>)
                }
            </div>
        </div>
    </div>
    )
}

export default Todo
