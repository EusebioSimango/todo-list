import './App.css';
import { useState } from 'react'
import Todo from './components/Todo';

function App() {
  
  const [todo, setTodo] = useState()

  function addNewTodo() {
    return 
      { document.querySelector('.App').append(
        (
          <p>{todo}</p>
        )
        )
      }
    
  }
  
  return (
    <div className="App">
      <h1>Todo List</h1>
      <p>What do you want to do</p>
      <Todo setTodo={setTodo} addNewTodo={addNewTodo}/>
    </div>
  );
}

export default App;
