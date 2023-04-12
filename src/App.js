import React, { useState, useEffect, children } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'  
import './index.css'
import './App.css'



import { auth } from "./firebase";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

import Home from './pages/Home'
import Sports from './pages/Sports'
import Fasion from './pages/Fasion'
import Bussiness from './pages/Bussines'
import Login from './components-1/Login/Login'
import Signup from './components-1/Signup/Signup'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter ([
  
  {
    path: '/',
    element: <Layout />,
    children: [
      
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/sports',
          element: <Sports />,
        },
        {
          path: '/fasion',
          element: <Fasion />,
        },
        {
          path: '/bussiness',
          element: <Bussiness />,
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element:<Signup />,
        },

    ],
  },
]);

const App = () => {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}



export default App