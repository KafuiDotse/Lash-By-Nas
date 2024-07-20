import './ContactUs.css'
import Button from '../Button/Button'
import ContactPic from '../../assets/images/contact_pic.png'

function ContactUs(){
    return(
        <>
        <div className="contact-section">
                <h1>Contact Us</h1>
                <div className="contact-section-container container">
                    <div className="left-section">
                        <img src={ContactPic} alt="" />
                        <p>Send your messages and requests to us here.</p>
                        <i className="fa-solid fa-arrow-right fa-2xl fa-fade arrow"></i>
                    </div>
                    <form action="" method=''>
                        <div className="right-section">
                            <div className="full-name">
                                <input className='ipt' type="text" name="" id="" placeholder='First Name'/>
                                <input className='ipt' type="text" name="" id="" placeholder='Last Name'/>
                            </div>
                            <div className="messages-section">
                                <input className='email' type="email" name="" id="" placeholder='Email' />
                                <textarea name="" id="" cols={30} rows={10} placeholder='Write your meassage...'></textarea>
                            </div>
                            <Button>Send Message</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default ContactUs