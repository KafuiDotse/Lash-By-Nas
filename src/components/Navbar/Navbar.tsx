import './Navbar.css'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import logo from '../../assets/images/logo.png'
import { useState } from 'react'

function Navbar(){
    const [display,setDisplay]=useState(false)

    function toggle(){
        setDisplay(!display)
    }
    return(
        <>
            <nav>
                <div className='container navbar'>
                    <div className="logo">
                        <Link to='/' className='logo-link'><img src={logo} alt="logo" />Lash By Nas</Link>
                    </div>
                    <ul>
                        <li><Link to="/" className='nav-link' id='home'>Home</Link></li>
                        <li><Link to='/our-work'className='nav-link'><Button>Our Work</Button></Link></li>
                        <button className='toggle-btn' onClick={toggle}><i className="fa-solid fa-bars fa-xl"></i></button>
                    </ul>
                </div>
                <div className={display==true? "mbl-nav toggle": "mbl-nav"}>
                    <ul>
                        <li><Link to="/" className='nav-link-mbl' onClick={toggle}>Home</Link></li>
                        <li><Link to='/our-work' className='nav-link-mbl' onClick={toggle}><Button>Our Work</Button></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar