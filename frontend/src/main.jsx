import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Layout from './Layout.jsx'
import About from './components/About.jsx'
import Developer from './components/Developer.jsx'
import Contact from './components/Contact.jsx'
import Root from './components/Root.jsx'
import Todos from './components/Todos.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/register",
        element: <Signup/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/developer",
        element: <Developer/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/root",
        element: <Root/>
      },
      {
        path: "/todos",
        element: <Todos/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
