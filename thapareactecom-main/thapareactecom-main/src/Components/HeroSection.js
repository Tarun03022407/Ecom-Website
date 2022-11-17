import React from 'react'
import "./HeroSection.css"
import {  Heading, Image } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
// import { Button } from '../styles/Button'
const HeroSection = ({myData}) => {
const {name}= myData


  return (
    <div className='container' >
        
        <div className='grid grid-two-column' style={{display:"flex"}}>
        <div className='hero-section-data'>
       <p className='intro-data'>Welcome to  </p>
      <Heading> {name} </Heading>
       <p className='intro-data'>sdmncwdk iwehfiu uhewuid huyhf duwehydu wefhuedh euwue fhdw euh weufdhwedfu webduwefg weufhe   </p>
       <NavLink><Button >shop now</Button></NavLink>
    </div>

    <div className='hero-section-image'>
       <figure>
       <Image 
       src='./images/hero.jpg' alt='hero-section-photo'
       className='img-style' />
       </figure>
       </div>
        </div>
        
  

     


    </div>
  )
}

export default HeroSection