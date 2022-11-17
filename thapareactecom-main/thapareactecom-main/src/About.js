
import HeroSection from './Components/HeroSection'
import { useProductContext } from './Context/ProductContext';

const About = () => {
    const data = {
        name: "tarun ecom"
    };
const  { myName }= useProductContext()

  return (
    <div>
        {myName}
        <HeroSection myData={data} />
    </div>
  )
}

export default About