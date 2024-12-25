import React, { useState } from 'react'
import CreateTodo2 from './CreateTodo2'
import Alltodos2 from './Alltodos2'



const TodoWrapper2 = () => {
    let [todo, setTodo] = useState("")
    let [allTodos, setAllTodos]=useState([{text:"Shivam Gupta", id:1}])

     let handleTodo =(e)=>{
    setTodo(e.target.value)
     }
     let handleSubmit =(e)=>{ 
        e.preventDefault();
        console.log(todo);
        if (todo.trim()!=="") {
            let newTodo={
                text:todo,
                id:Date.now(),
                
            }
            console.log(newTodo)
            // setAllTodo([ ...allTodos, newTodo])
            setTodo("")
            
        } else {
            alert("empty Todo")
            
        }
     };
    
     let deleteTodo=(id)=>{
        console.log("deleteTodo")
        let filteredTodo = allTodos.filter((ele)=>{
            return ele.id !== id;
        })
        setAllTodos(filteredTodo)
     }
     let editTodo=(id)=>{
        let findtodo = allTodos.find((ele)=>{
            return ele.id ===id;
        })
        let filteredTodo = allTodos.filter((ele)=>{
            return ele.id !== id;
        })
        setAllTodos(filteredTodo)
        console.log("editTodo")
        setTodo(findtodo.text)
     }
     
  return (
    <div>
    <h1>This is todo wraper</h1>
      <CreateTodo2 
      todo={todo}
      handleTodo={handleTodo}
      handleSubmit={handleSubmit}

       />
      <Alltodos2 
      alltodos={allTodos}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
       />
    </div>
  )
}

export default TodoWrapper2
