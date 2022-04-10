import styles from './Todo.module.css'

function Todo({ setTodo, addNewTodo }){

  return (
    <div className={styles.controler}>
      <input id="todo" placeholder="New Todo..." onChange={e => setTodo(e.target.value)}/>
      <button onClick={addNewTodo}>Add</button>
    </div>
  )
}

export default Todo