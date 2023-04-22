import React, { Children } from 'react'
import Header from './components/header/Header'
import { RouterProvider, } from 'react-router'
import Navbar from './components/navbar/Navbar'
import { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home page/Home';
import Clubs from './pages/clubs _page/Clubs';
import Schools from './pages/schools_page/Schools';
import Tuk_soko from './pages/tuk soko/Tuk_soko';
import Leaders from './pages/leadership_page/schools_page/Leaders';
import Gallery from './pages/gallery/Gallery';
import Sports from './pages/sports/Sports';


function App() {

  const [openNav, setOpenNav] = useState(false);
    const openHandler= ()=>{
        setOpenNav(true)
    };

    const Layout = () => {
      return (
        <>
          <Header openfun={openHandler}/>
          <Navbar isOpen={!openNav}/>
        </>
      )
    }
    
    const Router = createBrowserRouter([
      {
        path : "/",
        element : <layout />,
        children : [
          {
            path : "/home",
            element : <Home/>
          },
          {
            path : "/clubs",
            element : <Clubs/>
          },
          {
            path : "/schools",
            element : <Schools/>
          },
          {
            path : "/tuk soko",
            element : <Tuk_soko/>
          },
          {
            path : "/satuk leadership",
            element : <Leaders/>
          },
          {
            path : "/gallery",
            element : <Gallery/>
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

