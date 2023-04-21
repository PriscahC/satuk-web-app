import React from 'react';
import "./navbar.css";
import {VscHome} from 'react-icons/vsc';
import {MdOutlineSchool , MdSportsTennis , MdOutlineShoppingBasket}from "react-icons/md";
import {IoPeopleCircleOutline}from "react-icons/io5";
import {GrGallery} from "react-icons/gr";
import {BsSuitClub} from "react-icons/bs";



const Navbar = () => {
  return (
    <div className="nav_container">
        <div className="navbar">
            <div className="nav_item">
                <VscHome className='nav_icons'/>
                <span>home</span>
            </div>
            <div className="nav_item">
                <MdOutlineSchool className='nav_icons'/>
                <span>schools</span>
            </div>
            <div className="nav_item">
                <BsSuitClub className='nav_icons'/>
                <span>clubs</span>
            </div>
            <div className="nav_item">
                <MdSportsTennis className='nav_icons'/>
                <span>sports</span>
            </div>
            <div className="nav_item">
                <MdOutlineShoppingBasket className='nav_icons'/>
                <span>tuk soko</span>
            </div>
            <div className="nav_item">
                <IoPeopleCircleOutline className='nav_icons'/>
                <span>leadership</span>
            </div>
            
            <div className="nav_item">
                <GrGallery className='nav_icons'/>
                <span>gallery</span>
            </div>
        </div>
    </div>    
  )
}

export default Navbar