import React, { useState } from 'react'

const PracticeControlledForm = () => {
    let[userData, setUserData] = useState(
        {username:"",
        useremail:"",
        password:"",
        confirmPassword:"",}

    )
    let handeChange =(e)=>{
      let{ value, name} = e.target;
      setUserData({...userData,[name]:value})

    }
    let formSubmit =(e)=>{
      e.preventDefault()
      console.log(userData)
      
    }

  return (
    <form onSubmit={formSubmit}>
         <label htmlFor=""> name:</label>
         <input type="text" placeholder='Enter the name'  name='username'  value={userData.username} onChange={handeChange}  /> <br /><br />
         <label htmlFor=""> email:</label>
         <input type="email" placeholder='Enter the name'  name='useremail' value={userData.useremail}  onChange={handeChange} /> <br /><br />
         <label htmlFor=""> password:</label>
         <input type="password" placeholder='Enter the name' name='password'  value={userData.password}  onChange={handeChange} /> <br /><br />
         <label htmlFor=""> confrimpassword:</label>
         <input type="confrimpssworrd" placeholder='Enter the name' name='confirmPassword'  value={userData.confirmPassword}  onChange={handeChange} /> <br /><br />
         <button type="submit">Submit</button>
    </form>
  )
}

export default PracticeControlledForm
