import { Button } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <div className='container'>
        <div>
        <p style={{fontSize:"40px",fontWeight:"600"}}>404</p>
       
        <p style={{fontSize:"30px",fontWeight:"600"}}>UH OH! You're lost</p>
        <p>The page you are looking for does not exist. How you get here is a mystery. But you can click the button below to go back to homepage </p>
     <NavLink to="/">   <Button marginLeft="40%" marginTop="30px">Go Back To Home</Button></NavLink>
      </div>
    </div>
    </div>
  )
}

export default ErrorPage