import Todo from "./Todo"

function Form(){
  function addNewTodo(event){
    event.preventDefault()
    
  }
  return (
    <>
      <form onSubmit={addNewTodo}>
        <input type="text" placeholder="New Todo..."/>
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default Form