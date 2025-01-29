import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
    <div>
      {/* <h1> this is Layout pages</h1> */}
      <Navbar/>
      <Toaster/>
      <Outlet/>
    </div>
  )
}

export default Layout
