import './About.css'
import About_us from '../../assets/images/about_us.jpg'

function About(){
    return(
        <>
            <div id="about" className="about">
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
        </>
    )
}
export default About