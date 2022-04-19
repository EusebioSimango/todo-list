import './App.css';
import { useState, useEffect } from 'react'
import Todo from './components/Todo';
import TodoList from './components/TodoList';

if (!localStorage.getItem("tasks")) {
  var localTodos = ""
} else {
  var localTodos = JSON.parse(localStorage.getItem("tasks"))
}

function App() {

  const [todo, setTodo] = useState({
    task: '',
    id: Math.ceil(Math.random() * 10000)
  })

  const [todos, setTodos] = useState(localTodos) 
    
  function addNewTodo() {
    if (todo.task.length >= 2)  {
      setTodos([...todos, todo])
      localStorage.clear()
      localStorage.setItem("tasks", JSON.stringify([...todos, todo]))
      setTodo({
        task: "",
        id: Math.ceil(Math.random() * 10000),
    
      })
    }  

  }

  function removeTodo(id) {
    const newTodos = todos.filter(todo => todo.id === id ? false : todo)
    console.log(id)
    setTodos(newTodos)
    localStorage.clear()
    localStorage.setItem("tasks", JSON.stringify(newTodos))
  }
  
  return (
    <div className="App">
      <h1>Todo List</h1>
      <p>What do you want to do</p>
      <Todo todo={ todo } setTodo={ setTodo } addNewTodo={ addNewTodo } />
      <TodoList todos={ todos } removeTodo={ removeTodo }/>
      {
      console.log(JSON.parse(localStorage.getItem('tasks')))}
    </div>
  );
}

export default App;
