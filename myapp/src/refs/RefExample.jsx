import { useRef } from "react";

const RefExapmle=()=>{
    // console.log(useRef)//! if gives an object==>{current:undefine}
    let demoRef =useRef();

    let changeBG=()=>{
        console.log(demoRef)
        demoRef.current.style.backgroundColor="red"
        demoRef.current.style.color="white"
        demoRef.current.style.border="5px solid black"
    }
  return (
        <div>
            <h1 ref={demoRef}>Learn RefExample</h1>
           <button  onClick={changeBG}>Click</button>
        </div>
  )  
}
export default RefExapmle;