import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      {/* <h1> this is app Componemnt</h1> */}
      
      <BrowserRouter>
        <Navbar/>
        <hr />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
