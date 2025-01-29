import React, { Fragment } from 'react'
import style from './navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = () => {
   let userID = sessionStorage.getItem("userID")

   let adminID = sessionStorage.getItem("adminID")
  //  console.log(userID);
  //  console.log(adminID);

  let nevigate = useNavigate()
  let logout = ()=>{
    if (adminID) {
      sessionStorage.removeItem('adminID');
      toast.success(" logout Successfully")
      nevigate('/');
      
    }else{
      sessionStorage.removeItem('userID');
      toast.success(" logout Successfully")
      nevigate('/')
    }
  }
   


  return (
    <nav id={style.nav}>
        <figure>
            <img src="/hive.png" alt="LOGO/hive-" title='Hive Logo' />
        </figure>
        <ul>
            <li><Link to="/">Home</Link></li>

            {adminID || userID ?(
              <Fragment>
              <li className='primary-btn'><Link to={adminID ? '/admin' :'/profile'}>Profile</Link></li>
              <li className='primary-btn' onClick={logout}>logout</li>
            </Fragment>
            ):(
              <Fragment>
              <li className='primary-btn'><Link to="/login">Login</Link></li>
              <li className='secondary-btn'><Link to="/signup">Signup</Link></li>
              </Fragment>
            )
            }
           
        </ul>

    </nav>
  )
}

export default Navbar
