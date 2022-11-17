import React from 'react'
import FeatureProduct from './Components/FeatureProduct'
import HeroSection from './Components/HeroSection'
import Services from './Components/Services'
import Trusted from './Components/Trusted'
const Home = () => {
    const data = {
        name:"Tarun Strore"
    }
  return (
    <div >
        <div>
            <HeroSection  myData={data} />
        </div>
        <div><FeatureProduct /></div>
        <div><Services /></div>
        <div><Trusted /></div>

    </div>
  )
}

export default Home