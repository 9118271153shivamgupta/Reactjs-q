import React from 'react'
import style from "./amazon.module.css"
import logo from "./assets/amazon.png";
import Flag from "react-world-flags";
import { FaCartPlus } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { MdArrowDropDown } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";



const Amazon = () => {
  return (
    <nav>
      <div className={style.left}>
      <div className={style.navlogo}>
            <img src={logo} alt="" />
            
      </div>
      <div className={style.location}>
          <div className={style.locationIcon}><IoLocationOutline /></div>
          <div>
          <div className={style.locationFirst} >Delivering to New Delhi 110020</div>
          <div className={style.locationSecond}> Update Location</div>
          </div>
      </div>

      </div>
      <section >
        <div className={style.searchContainer}> 
          <div className={style.All}>All <MdArrowDropDown /></div>
          <input type="search"  placeholder='Search Amazon.in'/>
         <div className={style.searchIcon}><ImSearch /></div>
          
          
        </div>
      </section>

      <ul>
        <li> <Flag code="IN" style={{ width: "20px" }} /> EN <sup><MdArrowDropDown /></sup> </li>
        <li>
        <div className={style.signIn}>Hello, signIn</div>
        <div className={style.accountList}>Account & Lists <sub><MdArrowDropDown /></sub> </div>
        </li>
        <li>
        <div className={style.return}>Returns </div>
        <div className={style.order}>&Orders</div>
        </li>
        <li> <div className={style.cartIcon}><FaCartPlus /></div>
        <div className={style.cart}>Cart</div>
        </li>
        
      </ul>
    </nav>
  )
}

export default Amazon
