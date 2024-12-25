import React, { useReducer } from 'react';

let initialState = 0;
function reducerFun( state,action){
    console.log(state, action)
    switch (action) {
        case "increment":return state+1;
            
        case "decrement":return state-1
        case "reset":return 0
        default:
          return "this is default"
    
    }
 }

const Reducer = () => {
    let [state,dispatch] = useReducer(reducerFun, initialState)
    console.log(state)
  return (
    <div>
      <h1>Learn Reducer here</h1>
      <h2> Count: {state}</h2>
      <button onClick={()=>dispatch("increment")}>Increment</button>
      <button onClick={()=>dispatch("decrement")}>decrement</button>
      <button onClick={()=>dispatch("reset")}>reset</button>
    </div>
  )
}

export default Reducer