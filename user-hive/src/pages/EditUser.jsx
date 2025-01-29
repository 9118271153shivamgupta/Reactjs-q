import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    let {id} =useParams(); //^used to etracts the dynamic route value
    console.log(id)

    let navigate = useNavigate()
    let [editEmp, setEditEmp] = useState({});
    useEffect(()=>{
        async function getEditUser(){
            let {data} =await axios.get(`http://localhost:3000/users/${id}`)
            console.log(data)
            setEditEmp(data) 
        }
        getEditUser()
    },[])
    let handleChange = (e)=>{
        let {name, value} = e.target
        setEditEmp({...editEmp, [name]:value})
    }

    let formSubmit = async(e)=>{
      e.preventDefault();
      try {
        let resp = await axios.put(`http://localhost:3000/users/${id}`,editEmp) ;
      console.log(resp);
      toast.success("user Update");
      navigate('/admin')
      
        
      } catch (error) {
        toast.error("unable to edit")
        
      }


      // console.log(editEmp) 
    }
      
  return (
    <div>
      <form onSubmit={formSubmit}>
        <label>UserName:</label>
        <input type="text" value={editEmp.username} name='username' onChange={handleChange}  />
        <br /><br />
        <label>Email:</label>
        <input type="email" value={editEmp.email} name='email'  onChange={handleChange}/>
        <br /><br />
        <label>Password:</label>
        <input type="password" value={editEmp.password}  name='password' onChange={handleChange} />
        <br /><br />
        <label>Phone:</label>
        <input type="tel"  value={editEmp.phoneno} name='phoneno' onChange={handleChange}/>
        <br /><br />
        <button type="submit">Update</button>
      </form>
      
    </div>
  )
}

export default EditUser
