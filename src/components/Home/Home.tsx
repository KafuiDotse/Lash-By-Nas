import './Home.css'
import { Link } from 'react-router-dom';
import Hero1 from '../../assets/images/hero1.png'
import About_us from '../../assets/images/about_us.jpg'
import Volume from '../../assets/images/volume.jpg'
import Button from '../Button/Button';

function Home(){
    return(
        <>
            <div className="hero">
                <div className="container">
                    <div className='text'>
                        <h1>
                            Enhance your beauty with luxurious lashes
                        </h1>
                        <p>
                            Experience the Art of Lash Perfection – Personalized, Professional, and Stunning Results
                        </p>
                        <Link to='/our-work'><Button>View our work</Button></Link>
                    </div>
                    <img src={Hero1} alt="hero" />
                </div>
            </div>
            {/* About */}
            <div className="about">
                <h1>Who we are</h1>
                <div className="about-container">
                    <img src={About_us} alt="about us" />
                    <div className="about-text-container">
                        <div className="about-text">
                            <h1>About us</h1>
                            <p>Confidence today is a precious thing, and sometimes all it takes to make someone feel good about themselves is a small change. Most of us fell in love with lashes because we had them done and loved how they made us look and feel. Here at Lash by Nas, we offer the best of  semi-permanent fibers that are glued to your natural lashes to make them appear longer thick and darker.</p>   
                        </div>
                    </div>
                </div>
            </div>
            {/* Our services */}
            <div className="our-services">
                <h1>Our Services</h1>
                <div className='cards-container '>
                    <div className='container'>
                        <p>What we offer</p>
                        <div className='service-cards'>
                            <div className="service-card">
                                <img src={Volume} alt="" />
                                <div className="hover-screen">
                                    <span className='name'>Volume</span>
                                    <span className='price'>Gh₵ 200</span>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;