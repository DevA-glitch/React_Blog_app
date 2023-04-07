import React, { useState, children } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'  
import './index.css'
import './App.css'

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
    ],
  },
]);

const App = () => {

  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}



export default App