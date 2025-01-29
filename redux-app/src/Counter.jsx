import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/counterSlice';

const Counter = () => {
    // ! multi line code 
  /* let count =  useSelector((state)=>{
    console.log(state);
    return state.counter
  })  */ 

    // ! single line  me linkhne ke liye
    let count = useSelector((state)=>state.counter);

    let dispatch = useDispatch();
  return (
    <div>
    <h1> this is counter : {count}</h1>
    <button onClick={()=>dispatch(increment("hii"))}>Increment</button>
    <button onClick={()=>dispatch(decrement('hello'))}>Decrement</button>
    <button onClick={()=>dispatch(reset('byee'))}>Reset</button>
    </div>
  )
}

export default Counter
