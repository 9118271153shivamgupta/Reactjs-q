import React, { useEffect, useState } from 'react'

const SideEffect = () => {
    let [count, setCount]=useState(0)

    // ! SYNTEX OF  useEffect hooks
            // useEffect(()=>{},[ dependency array])
    // ! if 
    // ! render
    useEffect(()=>{
        console.log(" work as render Method of class based ")
    })
    // !ComponentDidMoount
    useEffect(()=>{
        console.log(" work like ComponentDidMount Method  of class based")

        return()=>{//conponentDidUnmount
            console.log("conponentDidUnmount")
    }
    },[])
    // ! componentDidUpdate
    useEffect(()=>{
        console.log(" work like ComponentDidUpdate Method  of class based")
        return()=>{//getSnapshotBeforeUpdte
            console.log("prev state was:" ,count)
    }
    },[count])    
  return (
    <div>
      <h1>Learn Use Effect hook in react</h1>
      <h2>Counter{count}</h2>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}
export default SideEffect
