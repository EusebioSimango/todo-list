function TodoList({ todos, removeTodo }){

  if (todos) {
    return (
      todos.map( todo => (
        <div key={ todo.id } className="todo">
          <span></span>
          <p >{ todo.task }</p>
          <span className="removeTodo" onClick={ () => removeTodo(todo.id) }></span>
        </div>
      ))
    )
  } else {
    return (
      <div>
        <p>No tasks!</p>
      </div>
    )
  }
}

export default TodoList