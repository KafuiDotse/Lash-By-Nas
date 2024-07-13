import './hero.css'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Hero1 from '../../assets/images/hero1.png'

function Hero(){
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
        </>
    )
}
export default Hero