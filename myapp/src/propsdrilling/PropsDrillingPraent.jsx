import React from 'react'
import Child1 from './Child1'

const PropsDrillingPraent = () => {

    let user = [ { id:1, ename: "Shivam"}, {id:2, ename:"Arpita"}]
  return (
    <div>
      <h1> This is Props Drilling Praent Components</h1>
      <Child1  data={user}/>
    </div>
  )
}

export default PropsDrillingPraent
