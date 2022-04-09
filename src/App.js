import './App.css';
import { useState } from 'react'

function App() {
  
  function addNewTodo(event){
    event.preventDefault()
    const todos = document.querySelector('#todos')
    const todo = document.createElement('p')
    const input = document.querySelector('#todo')
    todo.innerHTML = input.value
    todos.append(todo)
    input.value = ""
    console.log(document.querySelector('#todo').value)
    
  }

  const [state, setState] = useState({
    
  })
  return (
    <div className="App">
        <h1>Todo List</h1>
        <p>What do you want to do</p>
        <form onSubmit={addNewTodo}>
          <input type="text" id="todo" placeholder="New Todo..."/>
          <button type="submit">Add</button>
        </form>
        <div id="todos"></div>
    </div>
  );
}

export default App;
