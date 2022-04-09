import styles from './Todo.module.css'

function Todo(props){
  return (
    <>
      <div>
        <p>{props.todo}</p>
        <span className={styles.removeTodo}></span>
      </div>
    </>
  )
}

export default Todo