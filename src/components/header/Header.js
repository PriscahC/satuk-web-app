
import './header.css'
import { TbBellRinging2Filled } from 'react-icons/tb'
import {MdMessage} from "react-icons/md"
import {FaBars} from "react-icons/fa"



const Header = () => {
  return ( 
    <div className='container'>
        <div className="logo">
            <span className="title">
                SATUK
            </span>
            <span className="name">
                student association of TUK
            </span>
        </div>
        <div className="icons_container">
            <FaBars className='icons  bars'/>
            <TbBellRinging2Filled className='icons'/>
            <MdMessage className='icons'/>
            <img src="/home/muturi/desktop/satuk_app/public/pictures/pexels-godisable-jacob-718978.jpg" alt="profile" className='profile_pic' />
        </div>
    </div>
  )
}

export default Header