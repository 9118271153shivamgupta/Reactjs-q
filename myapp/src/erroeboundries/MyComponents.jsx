import React, { useState } from 'react'

const MyComponents = () => {

    let[ count, setCount] =useState(0)
    function increment(){

        if (count >10) {
            throw new Error(" count value shoule not be greater then 10")
            
        }
        setCount(count +1)
    }
  return (
    <div>
      <h1> Counter: {count}</h1>

      <button onClick={increment}> Increment</button>
    </div>
  )
}

export default MyComponents
