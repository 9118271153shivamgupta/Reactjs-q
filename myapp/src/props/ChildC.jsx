import React from 'react'

const ChildC = ({setterFun}) => {
  let data = "Hello Child C";
  return (
    <div>
      <h1> I am Child C</h1>
      <button onClick={()=>setterFun(data)}> send Data to parent</button>
    </div>
  )
}

export default ChildC
