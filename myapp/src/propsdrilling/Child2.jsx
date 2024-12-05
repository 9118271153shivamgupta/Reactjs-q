import React from 'react'

const Child2 = (y) => {
    console.log(y.users);
    
  return (
    <div>
      <h1>I Am Child 2</h1>
      {/* <h1> this is Prop Drilling Object {y.users}</h1> */}

    </div>
  )
}

export default Child2
