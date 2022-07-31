import React from 'react';
import { useState } from 'react';

import './App.css';
// import Todo from './component/Todo';
import Todo from './component//functionalComponent/Todo';

function App() {
  const [isTodoAppVisible,  toggleTodoApp] = useState(false)

  const onChildComponentLoad = (chidData) => {
    console.log("Message : ", chidData);
  }

  const loadTodoApp = () => {
    if (isTodoAppVisible){
      toggleTodoApp(false)
    }
    else {
      toggleTodoApp(true)
    }
  }

  return (
    <div className='app-container'>
      <header className='app-header'>
        <p>Welcome</p>

      </header>
      <button onClick={loadTodoApp}>Load Todo App</button>
      {isTodoAppVisible && <Todo onLoadCallback={onChildComponentLoad} className="app"></Todo>} {/**props -> it is an object which is used to pass data from one component to another */}
    </div>
  );
}

export default App;
