import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { CgMenu, CgClose } from "react-icons/cg"
import { NavLink } from 'react-router-dom'
import "./Nav.css"
const Nav = () => {
    const [menuIcon,setMenuIcon]=useState()
    return (
        <div>

            <div className={ menuIcon ? "navbar active" : "navbar" } >
                <ul style={{display:"flex",gap:"20px" ,listStyleType:"none"}} className='navbar-lists'>
                    <li style={{textDecoration:"none"}}><NavLink to="/" className="navbar-link " > Home</NavLink></li>
                    <li><NavLink to="/about" className="navbar-link" >  About</NavLink></li>
                    <li><NavLink to="/products" className="navbar-link" > Products</NavLink></li>
                    <li><NavLink to="/contact" className="navbar-link" >Contact</NavLink></li>
                    <li><NavLink to="/cart" className="navbar-link cart-trolley--link" ><FiShoppingCart className="cart-trolley" /> <span className='cart-total--item'>10</span></NavLink></li>
                </ul>
                <div className='mobile-navbar--btn' >
                <CgMenu name="menu-outline" className="mobile-navbar-icon"
                onClick={()=>setMenuIcon(true)} />
                <CgClose name="close-outline" className="mobile-navbar-icon close-outline"
                onClick={()=>setMenuIcon(false)} /> 

            </div>


            </div>

         

        </div>
    )
}

export default Nav