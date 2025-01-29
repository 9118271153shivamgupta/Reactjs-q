import React,{lazy} from 'react'
// import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const Home = lazy(()=>import('./pages/Home'))
const About = lazy(()=>import('./pages/About'))
const Services = lazy(()=>import('./pages/Services'))
const Layout= lazy(()=>import('./pages/Layout'))
const NotFound = lazy(()=>import('./pages/NotFound'))
const Contacts = lazy(()=>import('./pages/Contacts'))

// import About from './pages/About'
// import Home from './pages/Home'
// import Services from './pages/Services'
// import Contacts from './pages/Contacts'
// import Layout from './pages/Layout'
// import NotFound from './pages/NotFound'

const App = () => {
    let myRoutes = createBrowserRouter([
        { 
            path:"/",
            element:<Layout/>,
            children:[
                {
                    path:"/",
                    element:<Home />
                },
                {
                    path:"/services",
                    element:<Services />
                },
                {
                    path:"/About",
                    element:<About/>
                },
                {
                    path:"/Contacts",
                    element:<Contacts/>
                },

                {
                    path:"*",
                    element:<NotFound/>
                },
            ]
        }        
    ])
  return (
    <div>
       {/* <h1> this is app Component</h1> */}
       <RouterProvider router={myRoutes}>
       {/* <Navbar />
       <hr /> */}
       </RouterProvider>
    </div>
  )
}

export default App
