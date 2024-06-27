import './Home.css'
import { Link } from 'react-router-dom';
import Hero1 from '../../assets/images/hero1.png'
import About_us from '../../assets/images/about_us.jpg'
import About_us_vid from '../../assets/videos/about_us_vid.mp4'
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
                <div className="about-video container">
                    <video src={About_us_vid} autoPlay controls loop></video>
                </div>
            </div>
        
        </>
    )
}
export default Home;