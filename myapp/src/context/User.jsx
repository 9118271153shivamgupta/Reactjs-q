import React, { useContext, useEffect, useState } from 'react'
import { Global } from './Contex'

 
const User = () => {
  let[dbData, setdbData] =useState()
    let users=useContext(Global)
    console.log(users)

    useEffect(()=>{
      setdbData(users)
    },[users])
  return (

   
    <div>
    {
      dbData?.map((ele)=>{
        let{id, ename}=ele;
         return(
          <section key={id}>
            <h1> this is users List</h1>
            <ol>
              <li>{id}</li>
              <li>{ename}</li>
            </ol>
          </section>
         )
      })
    }
      <h1> This is User</h1>
    </div>
  )
}

export default User
