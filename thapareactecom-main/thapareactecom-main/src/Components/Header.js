

import React from 'react'
import Nav from './Nav'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
const Header = () => {
  return (
   <div className='mainheader' >
    <NavLink to="/" >
        <Image  className='logo'
        src='../images/logo.png' 
        alt='logo'
        />
    </NavLink>
    <Nav />
   </div> 
    )
}


export default Header