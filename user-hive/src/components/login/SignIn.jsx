import React, { useEffect, useState } from "react";
import styles from "./signin.module.css";
import toast from "react-hot-toast";
import {  useNavigate } from "react-router-dom";
import axios from "axios";


const SignIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
      const [registeredUser, setRegisteredUser]=useState(null);
      
      let navigate =useNavigate()// it return the navigator function which is use to switch ths pages

      useEffect(()=>{
        async function getSignupUsers (){
          // let resp = await axios.get("http://localhost:3000/users") responce me se data nikalne pr
          // console.log(resp)
          let {data} = await axios.get("http://localhost:3000/users")
          console.log(data);
          setRegisteredUser(data);
        }
        getSignupUsers()
      },[])
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

      let authUser = registeredUser?.find((user)=>{
        return user.email === formData.email && user.password === formData.password;
      })
      console.log(authUser);
        if (authUser?.email==='admin@gmail.com' && authUser?.password === 'admin@123') {
          // navigate the profile Page
        navigate('/admin')
        // authuser id set in session storage
        sessionStorage.setItem('adminID', authUser.id)   
        }else if (authUser) {
        // navigate the profile Page
        navigate('/profile')
        //authuser id set in session storage
        sessionStorage.setItem('userID', authUser.id)  
      } else {
        // popup not registered
        toast.error(" not registered");
        // nevigate the Signup page
        navigate('/signup')
      }
      };
    
      return (
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label >Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Login
              </button>
            </form>
          </div>
        </div>
      );
    };    

export default SignIn;
