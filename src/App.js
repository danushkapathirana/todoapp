import React from 'react';

import './App.css';
import Todo from './component/Todo';

function App() {

  const onChildComponentLoad = (chidData) => {
    console.log("Message : ", chidData);
  }

  return (
    <div className='app-container'>
      <header className='app-header'>
        <p>Welcome</p>
      </header>

      <Todo onLoadCallback={onChildComponentLoad} className="app"></Todo> {/**pass onLoadCallback and className as props*/}
    </div>
  );
}

export default App;
