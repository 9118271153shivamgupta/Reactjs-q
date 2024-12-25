import React from 'react'
import ContextChildA from './ContextChildA';
import { createContext } from 'react';

// ! Step1 => creating a context
    // ? create context return a object
export let GlobalData =createContext()
const Contextparent = () => {

    console.log(GlobalData)//? it will print a context Object
    let data =[{id:1, text:"Hello"},{id:2, text:"Hii"}]

  return (
    <div>
    {/* //! Step 2==> Providing a context */}
      <GlobalData.Provider value={data}>
      <ContextChildA/>
      </GlobalData.Provider>
    </div>
  )
}

export default Contextparent
