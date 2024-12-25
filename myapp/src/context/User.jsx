import React, { useContext } from 'react'
import { Global } from './Contex'


const User = () => {
    let users=useContext(Global)
    console.log(users)
  return (

    
    <div>
      <h1> This is User</h1>
    </div>
  )
}

export default User
