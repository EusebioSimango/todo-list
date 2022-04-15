import styles from './Todo.module.css'

function Todo({ setTodo, addNewTodo, todo }){

  return (
    <div className={styles.controler}>
      <input id="todo" value={ todo.task } placeholder="New Todo..." onChange={ e => setTodo({...todo, task: e.target.value}) }/>
      <button onClick={ addNewTodo }>Add</button>
    </div>
  )
}

export default Todo