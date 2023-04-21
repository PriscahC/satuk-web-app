import './header.css'
import { TbBellRinging2Filled } from 'react-icons/tb'
import {MdMessage} from "react-icons/md"
import {FaBars} from "react-icons/fa"
import {useState } from 'react'
import Navbar from '../navbar/Navbar'


const Header = () => {
    const [openNav, setOpenNav] = useState(false)
   /* useEffect(
        ()=>{
            const openHandler= ()=>{
                setOpenNav(true)
            }
            const menu = document.getElementById('bar');
            menu.addEventListener('click', openHandler);
            return() =>{
                menu.removeEventListener('click',openHandler)
            }
        },[]
    )*/

  return ( 
    <>
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
                <FaBars className='icons  bars' id="bar" onClick={()=>setOpenNav(true)}/>
                <TbBellRinging2Filled className='icons'/>
                <MdMessage className='icons'/>
            </div>
           
        </div>
        {openNav && <Navbar isOpen={setOpenNav}/>}
    </>
  
  )
}

export default Header