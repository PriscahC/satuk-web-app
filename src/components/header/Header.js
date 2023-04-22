import './header.css'
import { TbBellRinging2Filled } from 'react-icons/tb'
import {MdMessage} from "react-icons/md"
import {FaBars} from "react-icons/fa"

const Header = (props) => {
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
            <FaBars className='icons  bars'id='bar' onClick={props.openfun}/>
            <TbBellRinging2Filled className='icons'/>
            <MdMessage className='icons'/>
        </div>
    </div>
       
    
  
  )
}

export default Header