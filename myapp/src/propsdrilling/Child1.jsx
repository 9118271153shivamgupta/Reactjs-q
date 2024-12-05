import React from 'react'
import Child2 from './Child2'

const Child1 = (x) => {
  return (
    <div>
    <h1> I AM Child 1 </h1>
      <Child2 users = {x.data}/>
    </div>
  )
}

export default Child1
