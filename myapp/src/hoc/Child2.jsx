import React from 'react'
import Hoc from './Hoc'

const Child2 = (y) => {

    console.log(y.data)
  return (
    <div>
      <h2> This is Child 2{y.data}</h2>
    </div>
  )
}

export default Hoc(Child2)
