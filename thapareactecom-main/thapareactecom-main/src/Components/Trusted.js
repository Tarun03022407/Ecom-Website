import { Image } from '@chakra-ui/react'
import "./Trusted.css"
import React from 'react'

const Trusted = () => {
  return (
    <div className='brand-section'>
        <div className='container'>
            <p>Trusted By 1000+ companies</p>
        </div>
        <div className='brand-section-slider'>

              <div className='slide'><Image 
              className='img'
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
                alt="companylogo"
                />
                </div>  
                 <div className='slide'><Image 
                  className='img'
                  src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
                  alt="companylogo"
                />
                </div> 
                 <div className='slide'><Image 
                  className='img'
                  src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
                alt="companylogo"
                />
                </div> 
                 <div className='slide'><Image 
                  className='img'
                  src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
                alt="companylogo"
                />
                </div> 
                 <div className='slide'><Image 
                  className='img'
                  src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
                alt="companylogo"
                />
                </div> 
            </div>
        </div>

  )
}

export default Trusted