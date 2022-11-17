import { Button, Input } from '@chakra-ui/react'
import React from 'react'
import "./Footer.css"
import { NavLink } from 'react-router-dom'
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa"
const Footer = () => {
    return (
        <div>
            <section className='contact-short'>
                <div className='grid grid-two-column ' style={{display:"flex"}} >
                    <p>Ready to get started</p>
                    <p>Talk to us today</p>

                </div>

                <div>
                    <Button>
                        <NavLink to="/contact" > GET STARTED </NavLink>
                    </Button>
                </div>
            </section>


            <footer>
                <div className='container grid grid-four-column' style={{display:"flex"}}>
                    <div className='footer-about'>
                        <p>Tarun Technical</p>
                        <p>kdjfk eidfjkjd eiejdf iedj eijdfi edj </p>
                    </div>

                    <div className='footer-subscribe'>
                        <p> Subscribe to get important updates</p>
                        <form action="#">
                            <Input type="email" placeholder='your e-mail' />
                            <Input type="submit" value="subscribe" />

                        </form>
                    </div>


                    <div className='footer-social'>
                        <p>follow us</p>
                        <div className='footer-social--icons'>
                            <div> <a href='https://www.discord.com' > <FaDiscord className="icons" /> </a></div>
                            <div> <a href='https://www.instagram.com'>  <FaInstagram className="icons" /></a></div>
                            <div> <a href='https://www.youtube.com'> <FaYoutube  className="icons" /></a></div>


                        </div>
                    </div>


                    <div className='footer-contact'>
                        <h3>Call Us</h3>
                        <a href='tel:+919711677180' >+91-9711677180</a>
                    </div>
                </div>

                <div className='footer-bottom--section'>
                    <hr />
                    <div className='container grid grid-two-column'>
                    <p>@{new Date().getFullYear()} TarunTech. All Righr Reserved</p>
                    </div>
                    <div>
                        <p>PRIVACY POLICY</p>
                        <p>TERMS & CONDITIONS</p>

                    </div>
                </div>

            </footer>

        </div>
    )
}

export default Footer