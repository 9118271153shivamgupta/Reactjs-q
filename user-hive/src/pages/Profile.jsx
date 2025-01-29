import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserMedia from '../components/userMedia/UserMedia';

const Profile = () => {
  let [loggedInUser, setLoggedInUser] =useState(null)
  let userID = sessionStorage.getItem('userID');
  // console.log(userID)
  useEffect(()=>{
    async function getLoggedInUser(){
      // let resp = await axios.get(`http://localhost:3000/users/${userID}`);
      // console.log(resp)
      let {data} = await axios.get(`http://localhost:3000/users/${userID}`);
      // console.log(data)
      setLoggedInUser(data)
      // console.log(loggedInUser)

    }
    getLoggedInUser()
  },[])

  return (<>
    <div>
      <h1> Wellcom :{loggedInUser?.username}</h1>
      <p> email :{loggedInUser?.email}</p>
    </div>
    <UserMedia/>
    </>
  )
}

export default Profile
