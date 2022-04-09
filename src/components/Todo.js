import styles from './Todo.module.css'

function Todo(){

  function addNewTodo(event){
    event.preventDefault()
    if (event.target.value.length() > 0) {
    const todos = document.querySelector('#todos')
    const todo = document.createElement('p')
    const span = document.createElement('span')
    
    span.innerHTML = ''
    todo.className = `${styles.todo}`
    const input = document.querySelector('#todo')
    todo.innerHTML = `
      <p>${input.value}</p>
    `
    span.className = styles.removeTodo
    todo.append(span)
    todos.append(todo)
    input.value = ""
    console.log(document.querySelector('#todo').value)      
    }

  
  }

  return (
    <>
      <h1>Todo List</h1>
      <p>What do you want to do</p>
      <form onSubmit={addNewTodo}>
        <input type="text" id="todo" placeholder="New Todo..." />
        <button type="submit">Add</button>
      </form>
      <div id="todos"></div>
    </>
  )
}

export default Todo