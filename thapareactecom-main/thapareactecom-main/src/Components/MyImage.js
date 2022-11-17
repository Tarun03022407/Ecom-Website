import React, { useState } from 'react'
import "./MyImage.css"
const MyImage = ({imgs=[{url:""}]}) => {

    const [ mainImage,setMainImage]=useState(imgs[0])
  return (
    <div className='wrapper'>
        <div className='grid grid-four-column'>
            {
                imgs.map((curElem,index)=>{
                    return (
                        <figure>
                            <img src={curElem.url} alt={curElem.filename} className="box-image--style" key={index}
                            onClick={()=>setMainImage(curElem)}/>
                        </figure>
                    )
                })
            }
        </div>
        <div className='main-screen'> 
        <img src={mainImage.url} alt={mainImage.filename} /></div>
    </div>
  )
}

export default MyImage