import React from 'react'
import { FiHeart } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import "./Nav.css"
const Nav = () => {
  return (
    <nav>
    <div className='nav-container'>
     <input type='text' placeholder="enter your search"></input>
    </div>
    <div className='profile-container'>
        <a href="#"><FiHeart className='nav-icons'/></a>
        <a href="#"><FaShoppingCart className='nav-icons'/></a>
        <a href="#"><TiUserAdd className='nav-icons'/></a>
    </div>
    </nav>
  )
}

export default Nav
