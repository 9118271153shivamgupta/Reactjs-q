import React, { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';
import ChildC from './ChildC';

const Parent = () => {
  let [state, setState] = useState("");
    let data = [10,20,30,40]
    let data2 ={id:1, ename:"shivam"}

    function Display(){
      console.log(" i am Display function")
    }
    let  Display2=()=>{
      console.log(" i am Display2 function")
    }
  return (
    <div>
            <h1>
              I am Parent Class 
            </h1>
            <ChildA dbData={{data,data2}}  />
            {/* <ChildB  fun={Display}/> */}
            <ChildB  fun={{Display2, Display}}/>
            <hr />
            <ChildC setterFun={setState}/>
            {state}
    </div>
  )
}

export default Parent;
