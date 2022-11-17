import React from 'react'
import {TbTruckDelivery } from "react-icons/tb"
import {MdSecurity } from "react-icons/md"
import {GiReceiveMoney } from "react-icons/gi"
import {RiSecurePaymentLine} from "react-icons/ri"
import "./Services.css"
const Services = () => {
  return (
    <div>

        <div className='container' >
            <div className='grid grid-three-column' style={{display:"flex"}} >
                <div className='services-1'>
                    <div>
                        <TbTruckDelivery className="icon" />
                        <p>Super Fast and Free Delivery</p>
                    </div>
                </div>



                <div className='services-2'>
                    <div className='services-column-2' >
                    <div>
                    <MdSecurity className='icon' />
                        <p>non- contact shipping</p>

                    </div>
                    </div>
                    <div className='services-column-2' >
                       <div>
                       <GiReceiveMoney className='icon' />
                        <p>Money-Back Guaranteed</p>
                       </div>
                    </div>
                </div>




                <div className='services-3'>
                
                    <div>
                    <RiSecurePaymentLine className='icon' />
                        <p>Super Secure Payment System</p>

                    </div>
               
                </div>

            </div>

        </div>



    </div>
  )
}

export default Services