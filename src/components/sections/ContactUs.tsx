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
                        <div className="img-container">
                            <img src={ContactPic} alt="" />
                        </div>
                        <h1>Reach Out to Us Today</h1>
                        <p>Have questions or inquiries? We're here to help! Drop us a message and we'll get back to you promptly</p>
                    </div>
                        <div className="right-section">
                            <div className="full-name">
                                <input type="text" name="" id="" placeholder='First Name'/>
                                <input type="text" name="" id="" placeholder='Last Name'/>
                            </div>
                            <div className="messages-section">
                                <input className='email' type="email" name="" id="" placeholder='Email' />
                                <textarea name="" id="" cols={30} rows={10} placeholder='Write your meassage...'></textarea>
                            </div>
                            <Button>Send Message</Button>
                        </div>
                </div>
            </div>
        </>
    )
}
export default ContactUs