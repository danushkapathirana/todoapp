import React from "react";

class Todo extends React.Component {
    constructor(props){
        super(props) //

        this.state = {
            inputValue: '',
            todoItems: []
        }
    }

    componentDidMount(){
        if(typeof this.props.onLoadCallback === 'function'){ //consume props values
            this.props.onLoadCallback("Child component mounted successfully")
        }
    }

    handleInputOnChange = (event) => {
        const value = event.target.value
        this.setState({ inputValue: value })
    }

    storeTodoItem = () => { //arrow function does not have their own scope, they have their parent scope
        const itemValue = this.state.inputValue
        const existingTodoItems = [...this.state.todoItems]
        existingTodoItems.push({
            id: this.state.todoItems.length + 1,
            value: itemValue
        })
        this.setState({ todoItems: existingTodoItems }) //when the state value changed component always re-rendered
    }

    deleteTodoItem = (targetItem) => {
        const updateTodoList = this.state.todoItems.filter(item => item.id !== targetItem.id)
        this.setState({ todoItems: updateTodoList })
    }

    render(){
        return(
            <div className="todo-app">
                <div className="app-header">
                    <p>Todo App</p>
                </div>

                <div className="app-body">
                    <div className="input-container">
                        <input type="text" onChange={this.handleInputOnChange} value={this.state.inputValue}></input>
                        <button onClick={this.storeTodoItem}>Add Item</button>
                    </div>
                    <div className="todo-list">
                        {
                            this.state.todoItems.map((item, index) => <li className="todo-item">{item.value}<button onClick={() => this.deleteTodoItem(item)}>&#10005;</button></li>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo
