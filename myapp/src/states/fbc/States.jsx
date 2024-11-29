import { useState } from "react";


const States =()=>{
    console.log(useState)
    let [state , setState] =useState("Hello");
    let [cart, setCart] =useState("add to cart")
    console.log(useState) //! this line give an array which have two value==>[undefine,f]
    // console.log(state);
    // console.log(setState)
function btnclick(){
    console.log("button Click")
    setState("Byee")
}

    return (
        <div>
            <h1> I am States in FBC {state}</h1>
            <button onClick={btnclick}>Click</button>
            <button onClick={()=>{setCart("go to cart")}}>{cart}</button>
        </div>
    );
};
export default States;