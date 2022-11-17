import React from 'react'
import { NavLink } from 'react-router-dom'
import FormatPrice from './Helpers/FormatPrice'
const Product = (curElem) => {
    const {id,name,image,price,category}=curElem
  return (
 <NavLink to={`/singleproduct/${id}`} > 
 
  <div className='card'>
    <figure>
        <img src={image} alt={name}/>
        <figcaption className='caption'>{category}</figcaption>        
    </figure>
        <div className='card-data'>
            <p>{name}</p>
            <p className='card-data--price'>{<FormatPrice price={price} />} </p>
        </div>
    </div>
    </NavLink> 
  )
}

export default Product