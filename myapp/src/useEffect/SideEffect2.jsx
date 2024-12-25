import React, { useEffect } from 'react'

const SideEffect2 = () => {
    useEffect(()=>{
        console.log("mounted")
        let s1 = setInterval(()=>{
            console.log("hello")
        },2000)

        return()=>{
            console.log("unmounted")
            clearInterval(s1)
        }
    },[])
  return (
    <div>
      <h1> SideEffect 2 function</h1>
    </div>
  )
}

export default SideEffect2;
