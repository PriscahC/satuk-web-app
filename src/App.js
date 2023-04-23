import React from 'react'
import "./App.css"
import Header from './components/header/Header'
import  Login from './components/login_form/Login'
import { Outlet, RouterProvider, } from 'react-router'
import Navbar from './components/navbar/Navbar'
import { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home page/Home';
import Clubs from './pages/clubs _page/Clubs';
import Schools from './pages/schools_page/Schools';
import TukSoko from './pages/tuk soko/TukSoko';
import Leaders from './pages/leadership_page/schools_page/Leaders';
import Gallery from './pages/gallery/Gallery';
import Sports from './pages/sports/Sports';




function App() {

  const [open, setOpen] = useState(false);
    const openHandler = ()=>{
        setOpen(!open)
    };

    const closeHandler = ()=>{
      setOpen(false)
    }

    const Layout = () => {
      return (
        <>
          <Header openfun={openHandler} isactive={open} />
          <div className="app_container">
            <Navbar isOpen={open} closefun={closeHandler}/>
            <Login />
            <Outlet />
          </div>
        </>
      )
    }

    const Router = createBrowserRouter([
      {
        path : "/",
        element : <Layout />,
        children : [
          {
            path : "/home",
            element : <Home />
          },
          {
            path : "/clubs",
            element : <Clubs />
          },
          {
            path : "/schools",
            element : <Schools />
          },
          {
            path : "/tuk_soko",
            element : <TukSoko />
          },
          {
            path : "/leadership",
            element : <Leaders />
          },
          {
            path : "/gallery",
            element : <Gallery />
          },
          {
            path : "/sports",
            element : <Sports />
          }
        ]
      }
    ]);

  return (
    <div className='app'>
      <RouterProvider router={Router}/>
    </div>
  )
}

export default App

