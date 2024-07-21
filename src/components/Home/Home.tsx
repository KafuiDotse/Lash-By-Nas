import './Home.css'
import Hero from '../sections/hero';
import About from '../sections/About';
import OurServices from '../sections/OurServices';
import ContactUs from '../sections/ContactUs';
import AddonServices from '../sections/AddonServices';

function Home(){
    return(
        <>
            <Hero></Hero>
            {/* About */}
            <About></About>
            {/* Our services */}
            <OurServices></OurServices>
            <AddonServices></AddonServices>
            {/* ######################################## */}
            <ContactUs></ContactUs>
        </>
    )
}
export default Home;