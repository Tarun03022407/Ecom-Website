import React from 'react'
import { useProductContext } from '../Context/ProductContext'
import "./FeatureProduct.css"
import Product from './Product'
const FeatureProduct = () => {
    const {isLoading,featureProducts} = useProductContext()
    if(isLoading){
        return <div>...loading</div>
    }
  return (
    <div className='section'>
     <div className='container' >
        <div className='intro-data'>
            Check Now 
        </div>
        <div className='common-heading' style={{display:"flex"}}>
            Our Feature Services
        </div>
        <div className='grid grid-three-column' style={{display:"flex"}}>
            {
             featureProducts.map ((curElem)=>{
                return <Product key={curElem.id} {...curElem} />
             })  
            }
        </div>
     </div>
    </div>
  )
}

export default FeatureProduct