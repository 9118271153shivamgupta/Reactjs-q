import React from 'react'
import style from "./alltodos.module.css"

const AllTodo = (props) => {
  console.log(props)
  let {alltodos, deleteTodo, editTodo} = props
  return (
    <div id={style.todosWrapper}>
      {
        alltodos.map((ele)=>{
          console.log(ele);
          let{text, id} = ele;
          return (
            <section key={id}>
              <h1> {text}</h1>
              <button onClick={()=>editTodo(id)}>Edit</button>
              <button onClick={()=>deleteTodo(id)}>Delete</button>
            </section>
          );
        })
      }
    </div>
  );
};

export default AllTodo;
