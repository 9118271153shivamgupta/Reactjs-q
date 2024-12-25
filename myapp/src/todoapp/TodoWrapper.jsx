import React, { useState } from 'react'
import CreateTodo from './CreateTodo'
import AllTodo from './AllTodo'

const TodoWrapper = () => {
    let [todo, setTodo] =useState("") ;
    let [allTodo, setAllTodo] = useState([{text:"hello world", id:12}])

    let handleTodo =(e)=>{
        setTodo(e.target.value);
    };
    
    let createTodo =(e)=>{
        e.preventDefault();
        console.log(todo);
        if (todo.trim()!=="") {
            let newTodo={
                text:todo,
                id:Date.now(),
                
            }
            console.log(newTodo)
            setAllTodo([ ...allTodo, newTodo])
            setTodo("")
            
        } else {
            alert("empty Todo")
            
        }

    };

    let deleteTodo =(id)=>{
        console.log("deleteTodo", id)
         let filteredTodo = allTodo.filter((ele)=>{
            return ele.id !== id;
        
        })
        setAllTodo(filteredTodo)
    }

    let editTodo =(id)=>{
        
        console.log("edit", id)
         let editTodo = allTodo.find((ele)=>{
            return ele.id===id;
        })
        console.log(editTodo)
        let filteredTodo = allTodo.filter((ele)=>{
            return ele.id !== id;
        
        })
        setAllTodo(filteredTodo)
        setTodo(editTodo.text);

    }
    // console.log(allTodo)
  return (
    <div>
        <CreateTodo 
        todo={todo}  
        handleTodo={handleTodo} 
        createTodo={createTodo}/>
        <AllTodo alltodos={allTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>   
    </div>
  )
}

export default TodoWrapper;
