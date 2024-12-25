import React from 'react'; 
import style from './alltodos2.module.css';

const Alltodos2 = (props) => {
    let { alltodos, deleteTodo, editTodo } = props;

    return (
        <div id={style.todosWrapper}>
            {alltodos.map((ele) => {
                let { text, id } = ele;
                return ( // Ensure you return JSX here
                    <section key={id}>
                        <h1>{text}</h1>
                        <button onClick={() => editTodo(id)}>Edit</button>
                        <button onClick={() => deleteTodo(id)}>Delete</button>
                    </section>
                );
            })}
        </div>
    );
};

export default Alltodos2;
