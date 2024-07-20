import './Home.css'
import { Link } from 'react-router-dom';
import Hero1 from '../../assets/images/hero1.png'
import About_us from '../../assets/images/about_us.jpg'
import Volume from '../../assets/images/volume.jpg'
import MegaVolume from '../../assets/images/mega volume.jpg'
import Classic from '../../assets/images/classic.jpg'
import Hybrid from '../../assets/images/hybrid.jpg'
import ContactPic from '../../assets/images/contact_pic.png'
import Button from '../Button/Button';
import Hero from '../sections/hero';
import About from '../sections/About';
import OurServices from '../sections/OurServices';
import ContactUs from '../sections/ContactUs';

function Home(){
    return(
        <>
            <Hero></Hero>
            {/* About */}
            <About></About>
            {/* Our services */}
            <OurServices></OurServices>
            {/* ######################################## */}
            <ContactUs></ContactUs>
        </>
    )
}
export default Home;