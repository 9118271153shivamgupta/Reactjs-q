import React from 'react'
import style from './createtodo2.module.css';

const CreateTodo2 = (props) => {
    let {todo, handleTodo, handleSubmit}= props;
  return (
    <div id={style.createTodo}>
      <form onSubmit={handleSubmit} >
        <h1> Create Todo</h1>
        <input 
        type="text"
        value={todo}
        onChange={handleTodo}
        placeholder='text is here'

         />
         <button>Create Todo</button>
      </form>
    </div>
  )
}

export default CreateTodo2
