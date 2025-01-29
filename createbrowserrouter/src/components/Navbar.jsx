import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
              <Link to="/">
                Home
              </Link>
              {/* <a href="">Home</a> */}
            </li>
            <li>
              {/* <a href="">Services</a> */}
              <Link to="/About">
                About
              </Link>
            </li>
            <li>
              {/* <a href="">About</a> */}
              <Link to="/Services">
                Services
              </Link>
            </li>
            <li>
              {/* <a href="">Contacts</a> */}
              <Link to="/Contacts">
                Contacts
              </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
