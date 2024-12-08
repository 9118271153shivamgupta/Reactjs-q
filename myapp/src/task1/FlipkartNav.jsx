import React from 'react'
import style from "./flipkart.module.css";
import logo from "../task1/assets/logosvg.svg"
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const FlipkartNav = () => {
  return (
    <nav> 
    <aside className={style.logo}>
        <img src={logo} alt="" />
        
    </aside>
    <section className={style.searchContainer}>

        <div className={style.searchbar}>
          <FaSearch />
          <div className={style.inputbox}>
          
            <input type="search"  placeholder='Search for More Products, Brands and More'/>
      
          </div>
        </div>
    </section>
    <ul>
        <li>
        <FaRegUserCircle />LOGIN</li>
        <li><BsCart4 />Cart</li>
        <li><CiShop />Become A Seller</li>
        <li><IoMdMore /></li>
    </ul>
    </nav>
  )
}

export default FlipkartNav
