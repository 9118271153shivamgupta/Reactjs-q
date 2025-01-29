import React from 'react'
import Child1 from './Child1'
const HocParent = () => {
  return (
    <div>
    <h1> this is parent</h1>
      <Child1/>
    </div>
  )
}

export default HocParent
