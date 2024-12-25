import React, { createContext } from 'react'

export let Global = createContext()

const Contex = (x) => {
    console.log(x)//! ==> {children:{..}}
    let data = [
        {id:1,ename:"Shivam"},
        {id:2,ename:"Shyam"}
    ]
  return (
   <Global.Provider value={data}>
    {x.children}
   </Global.Provider>
  )
}

export default Contex
