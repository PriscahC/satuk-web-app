import React, { Children } from 'react'
import Header from './components/header/Header'
//import { RouterProvider, } from 'react-router'
import Navbar from './components/navbar/Navbar'
import { useState } from 'react';


function App() {
  const [openNav, setOpenNav] = useState(false);
    const openHandler= ()=>{
        setOpenNav(true)
    };
  return (
    <div className='app'>
      <Header openfun={openHandler}/>
      <Navbar isOpen={!openNav}/>
    </div>
  )
}

export default App

