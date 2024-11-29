import React, { useState } from 'react'

const Heart =() => {
    let [count, setCount] = useState(0);
  return (
    <div>
      <h1>❤️<sup>{count}</sup></h1>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={() => {
                    if (count > 0) {
                        setCount(count - 1);
                    }
                }}>Decrement</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}

export default Heart
