import React from 'react'
import "../Navbar/Navbar.css"
import Logo from "../../images/logo.svg"
import ProfileImg from "../../images/profile.svg"

const Navbar = () => {
  return (
    <nav>
        <img className='logo' src={Logo} alt="tute dude logo" />
        <ul>
            <li className='chat'>My Assignment</li>
            <li className='chat'>Chat with Mentor</li>
            <li className='profile'>
                <img src={ProfileImg} alt="user profile" />
                <p>ProfileName</p>
            </li>

        </ul>
    </nav>
  )
}

export default Navbar