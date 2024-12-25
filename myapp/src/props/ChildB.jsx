import React from 'react'

const ChildB = (props) => {
  let {fun}=props
    console.log(fun)  

  return (
    <div>
      <h1> i am Child B</h1>
      <button onClick={fun}> Click me</button>
    </div>
  )
}

export default ChildB
