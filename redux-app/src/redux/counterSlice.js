import { createSlice } from "@reduxjs/toolkit";

//! step2:  create a Slice/Feature
 export let counterSlice = createSlice({
    name:"counterSlice",
    initialState:0,
    reducers:{
        increment:(state, action)=>{
            console.log(state, action);
            return state+1;
        },
        decrement:(state, action)=>{ 
            console.log(state, action);
            return state-1;
        },
        reset:(state, action)=>{
            console.log(state, action);``
            return state = 0;  // or 0
        }
    },

});
export let { increment, decrement, reset} = counterSlice.actions