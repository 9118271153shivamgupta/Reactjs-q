import React from 'react'
import style from "./createtodo.module.css"

const CreateTodo = (prop) => {

    let {todo,handleTodo,createTodo}=prop;

  return (
    <div id={style.createTodo}>
      <form onSubmit={createTodo}>
        <h2>Create Todo</h2>
        <input 
        type="text" 
        placeholder='todo.....' 
        value={todo} 
        onChange={handleTodo} 

        />
        <button>Create</button>
      </form>
    </div>
  )
}

export default CreateTodo
