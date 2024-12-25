import React, { useState } from 'react'

const ControlledForms2 = () => {
    let [formData, setFormData] = useState({
        useremail:"",
        userpassword:""
    })
    let handleFormData = (e) =>{
        // console.log(e)
        let {name, value} = e.target
        setFormData({...formData, [name]:value})//here spread operator (...)
    }
    let handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)

    }
  return (
    <>
        <h1> Controlled Forms - Optimal way</h1>
        <form onSubmit={handleSubmit}>
            <label > Useremail: </label>
            <input 
            type="email" 
            value={formData.useremail} 
            onChange={handleFormData}
            name='useremail'
            />
             <br /> <br />
            <label> Password: </label>
            <input 
            type="password" 
            value={formData.userpassword} 
            onChange={handleFormData} 
            name='userpassword'
            />
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    </>
  )
}


export default ControlledForms2;


//! ============================================ controlled forms 2.0=========================================
