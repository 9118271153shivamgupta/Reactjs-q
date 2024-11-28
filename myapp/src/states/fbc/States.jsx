import { useState } from "react";


const States =()=>{
    console.log(useState)
    let [state , setState] =useState("Hello")
    console.log(state);
    console.log(setState)
function btnclick(){
    console.log("button Click")
    setState("Byee")
}

    return (
        <div>
            <h1> I am States in FBC {state}</h1>
            <button onClick={btnclick}>Click</button>
        </div>
    );
};
export default States;