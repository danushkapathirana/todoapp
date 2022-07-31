import React from "react";
import { useState, useEffect } from "react"; //hooks introduce after 16.8 version

var counter = 0
function Todo(props) {
    const [inputValue, setInputValue] = useState("") //hook
    const [todoItems, setTodoItems] = useState([])

    // useEffect(() => { hook ; componentDidMount() ; difference: empty dependencies
    // }, [])

    // useEffect(() => { componentDidUpdate() ; called: when mounting phase and state changes happen
    // })

    // useEffect(() => { componentWillUnmount ; difference: there is a return function which executes when component will unmount
    //     return() => {}
    // })

    useEffect(() => {
        if(typeof props.onLoadCallback === 'function'){
            props.onLoadCallback("Child component mounted successfully")
        }

        const intervalId = setInterval(() => {
            console.log("Count", ++counter);
        }, 1000)

        return() => { //componentWillUnmount or else clear the sideEffect
            console.log("Child component unmounted successfully")
            clearInterval(intervalId)
        }
    }, []) //componentDidMount

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
