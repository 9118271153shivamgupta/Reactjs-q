import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";


//! step1:  create store in redux
 export let myStore = configureStore({
    reducer:{
        counter:counterSlice.reducer
    },
});