import React, { useReducer } from 'react'

 let initialState=0
 function reducerFun(state,action){
     console.log(state);
     switch (action.type) {
        case "increment":
            return state +1;
        case "decrement" :
            if (state>0) {
                return state-1
                
            } else {
                return 0
                
            }
        default: return " this is default";       
     }
     
 }

const PracticeReducer = () => {
   let [state, dispatch] = useReducer(reducerFun, initialState)
  return (
    <div>
      <h1> today i am learn React Reducer</h1>
      <h1>
      this is Counter :{state}
      </h1>
       <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
       <button onClick={()=>dispatch({type:"decrement"})}>Increment</button>
    </div>
  )
}

export default PracticeReducer;
