import './OurServices.css'
import Volume from '../../assets/images/volume.jpg'
import MegaVolume from '../../assets/images/mega volume.jpg'
import Classic from '../../assets/images/classic.jpg'
import Hybrid from '../../assets/images/hybrid.jpg'

function OurServices(){
    return(
        <>
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
                                    <span className='price'>Gh₵ 350</span>  
                                </div>
                            </div>

                             <div className="service-card">
                                <img src={MegaVolume} alt="" />
                                <div className="hover-screen">
                                    <span className='name'>Mega Volume</span>
                                    <span className='price'>Gh₵ 400</span>  
                                </div>
                            </div>

                            <div className="service-card">
                                <img src={Classic} alt="" />
                                <div className="hover-screen">
                                    <span className='name'>Classic Set</span>
                                    <span className='price'>Gh₵ 200</span>  
                                </div>
                            </div>

                            <div className="service-card">
                                <img src={Hybrid} alt="" />
                                <div className="hover-screen">
                                    <span className='name'>Hybrid</span>
                                    <span className='price'>Gh₵ 280</span>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurServices