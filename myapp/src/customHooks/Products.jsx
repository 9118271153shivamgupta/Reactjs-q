import React from 'react'
import { useApi } from './useApi'

const Products = () => {
    let data =useApi("https://jsonplaceholder.typicode.com/todos/1");
    let userdata =useApi("https://jsonplaceholder.typicode.com/users");
    console.log(userdata)
    console.log(data)
  return (
    <div>
      <h1> This is Product file</h1>
    </div>
  )
}

export default Products
