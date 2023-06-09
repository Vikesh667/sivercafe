import React, { useState } from 'react'
import style from './Navbar.module.css'
import {BiMenu} from 'react-icons/bi'
import {Link} from "react-router-dom"
const Navbar = () => {
    const [toggle,setToggle]=useState(true)
    const openCloseMenu=()=>{
         setToggle(!toggle)
    }
  return (
    <nav className={style.navbar} >
     <div className={style.logo}>
        <h2>Vikesh</h2>
     </div>
      { toggle ?
        <div className={style.menu}>
       <ul>
           <li> <Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/register'>Register</Link></li>
        </ul>
       </div>
       :
       <div className={style.mobileView} >
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>
              <a>Services</a>
              <ul className={style.dropdown}>
                <li><Link>Vikesh</Link></li>
                <li><Link>Vikesh</Link></li>
                <li><Link>Vikesh</Link></li>
              </ul>
            </li>
            <li>Contact</li>
            <li>Profile</li>
        </ul>
       </div>
       } 
      <button className={style.menuBtn} onClick={openCloseMenu} ><BiMenu/></button>
     </nav>
  )
}

export default Navbar