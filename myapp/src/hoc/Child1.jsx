import React from 'react'
import Hoc from './Hoc'
import Child2 from './Child2'

const Child1 = (x) => {
    console.log(x.data)
  return (
    <div>
      <h1> this is HOC Child 1{x.data} </h1>
      <Child2/>
    </div>
  )
}

export default Hoc(Child1)
