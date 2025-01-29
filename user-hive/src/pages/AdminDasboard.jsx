import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import './admindashboard.module.css'

const AdminDasboard = () => {

  let [allUser, setAllUser] = useState([]);
  let [toggel , setToggel] = useState()

    useEffect(()=>{
      async function getAllRegisteruser(){
        let {data} =  await axios.get('http://localhost:3000/users');
        // let resp = await axios.get('http://localhost:3000/users')
        // console.log(resp)
        console.log(data) 
        setAllUser(data)
      }
      getAllRegisteruser()

    },[toggel])

     async function deleteUser(id){
       try {
        await axios.delete(`http://localhost:3000/users/${id}`);
       toast.success('user deleted Successfully');

       setToggel(!toggel)
       } catch (error) {
        toast.error("unable to delete")
        
       }

    }

  return (
    <div>
      <h1>admin DashBoard</h1>
      {
        allUser.map((user)=>{
          if( user.email !== 'admin@gmail.com' && user.password !== 'admin@123'){
            return(
              <section key={user.id}>
                <h3>name:{user.username}</h3>
                <h3>Email:{user.email}</h3>
                <h3>Password:{user.password}</h3>
                <h3>Phone No:{user.phoneno}</h3>
                <h3>gender:{user.gender}</h3> 
                <button className='primary-btn'>
                  <Link to={`/edit/${user.id}`}>Edit</Link>
                </button>
                <button  className='secondary-btn' onClick={()=>deleteUser(user.id)}>Delete</button>
              </section>
              
          )
          }
          
        })
      }
    </div>
  )
}

export default AdminDasboard
