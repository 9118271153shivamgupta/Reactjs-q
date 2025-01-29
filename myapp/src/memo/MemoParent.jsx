import React, { useCallback, useMemo, useState } from 'react'
import MemoChild1 from './MemoChild1';

const MemoParent = () => {
    let [add, setAdd]=useState(0);
    let [minus, setMinus]=useState(0)
     
    // function multiplication(){
    // console.log("*****************")
    //     return add*10
    // }


    let val=useMemo(()=>{
        console.log("************")
        return add*10
    },[add])

//! useCallBack=============================================================
// ^ it is used for performance optimazation , it returrn memoization function
// function display(){
//     console.log(" this is diaplay funtion")
// }
let display = useCallback(()=>{
    console.log(" this is display function")
}, [ add])
  return (
    <div>
      <h1>
        learn use Memo hook
      </h1>
      
      <h4>
        multiplication{val}
      </h4>
       <h2>
        Addition: {add}
        <button onClick={()=>setAdd(add+1)}> increase</button>
       </h2>
       <h2>
        Substraction: {minus}
        <button onClick={()=>setMinus(minus-1)}> deccrease</button>
       </h2>
 
       <MemoChild1 display={display} />
    </div>
  )
}

export default MemoParent









//^ it is  proformance optimation  hook  which is use for increacse the performance and return the memoized value. 
//^ it take two  argument 1. call back function  2. dependancy array
//& usememo(()=>{},[]