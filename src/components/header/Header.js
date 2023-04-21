import './header.css'
import { TbBellRinging2Filled } from 'react-icons/tb'
import {MdMessage} from "react-icons/md"
import {FaBars} from "react-icons/fa"
import { useState } from 'react'


const Header = () => {
    const [openNav , setopenNav] = useState();
    const navOPen = ()=>{
        setopenNav(true);
    }
    const closenav = ()=>{
        setopenNav(false);
    }

  return ( 
    <div className='container'>
        <div className="logo">
            <h3 className="title">
                SATUK
            </h3>
            <span className="name">
                student association of TUK
            </span>
        </div>
        <div className="icons_container">
            <FaBars className='icons  bars' onClick={navOPen}/>
            <TbBellRinging2Filled className='icons'/>
            <MdMessage className='icons'/>
        </div>
       
    </div>
  )
}

export default Header