import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Layout from './Layout.jsx'
import Contact from './components/Contact.jsx'
import Root from './components/Root.jsx'
import Todos from './components/Todos.jsx'
import CreateTodo from './components/CreateTodo.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'


// SERVER 
export const SERVER = 'https://e2e-todo-app.vercel.app'

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
      },
      {
        path: "/create-todo",
        element: <CreateTodo/>
        
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>

    <RouterProvider router={router}/>
    </AuthContextProvider>
  </React.StrictMode>,
)
