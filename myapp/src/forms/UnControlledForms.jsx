import React, { useRef } from 'react'

const UnControlledForms = () => {

    let usernameRef =useRef();
    let emailRef =useRef();
    let passwordRef =useRef();

    let formSubmit=(e)=>{
        e.preventDefault();
        // console.log(usernameRef.current.value)
        // console.log(emailRef.current.value)
        // console.log(passwordRef.current.value)
        // ! for get user data in object form
        
        let user = {
            username:usernameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value
        }
        console.log(user)
        
    }
  return (
    <div><hr />
        <h1> This is uncontrolled Forms</h1>
        <form onSubmit={formSubmit}>
            <label htmlFor="">Name :</label>
            <input type="text" ref={usernameRef} />
            <br /><br />
            <label htmlFor="">email :</label>
            <input type="email" ref={emailRef} />
            <br /><br />
            <label htmlFor="">Password :</label>
            <input type="password" ref={passwordRef} />
            <br /><br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UnControlledForms
