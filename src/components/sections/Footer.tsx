import "./Footer.css"
import { Link } from "react-router-dom"
import logo from '../../assets/images/logo.png'

function Footer(){
    return(
        <>
            <div className="footer-section container">
                <div className="logo">
                    <Link to='/' className='logo-link'><img src={logo} alt="logo" />Lash By Nas</Link>
                </div>
                <p>Join us today for an unforgettable experience at Lash by Nas</p>
                <div className="content">
                    <div className="column">
                        <h1>Links</h1>
                        <ul>
                            <li><a href="#hero" className="link">Home</a></li>
                            <li><a href="#about" className="link">About</a></li>
                            <li><Link className="link" to='/our-work'>Our Work</Link></li>
                        </ul>
                    </div>

                    <div className="column">
                        <h1>Social Media</h1>
                        <ul>
                            <li><Link className="link" to='#hero'><i className="fa-brands fa-whatsapp fa-lg"></i> WhatsApp</Link></li>
                            <li><Link className="link" to='#about'><i className="fa-brands fa-instagram fa-lg"></i> Instgram</Link></li>
                            <li><Link className="link" to='/our-work'><i className="fa-brands fa-tiktok fa-lg"></i> TicTok</Link></li>
                        </ul>
                    </div>

                    <div className="column">
                        <h1>Contact</h1>
                        <ul>
                            <li><i className="fa-solid fa-phone fa-lg"></i> +2334532123</li>
                        </ul>
                    </div>

                    <div className="column">
                        <h1>Location</h1>
                        <ul>
                            <li><i className="fa-solid fa-location-dot fa-lg"></i> Find us at Ghana, Adenta</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer