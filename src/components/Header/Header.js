import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import './Header.css'
import '../../App.css'
import img_critologotype from '../../assets/images/logotype.svg'
import Button from '../Generics/Button'
import SocialMedia from '../Generics/SocialMedia'

const Header = () => {
  return (
    <header>
            <div className="container">
                <Link to="/"><img src={img_critologotype} alt="crito-logotype" id="crito-logotype"/></Link>
                <button className="menu-bars"><i className="fa-sharp fa-solid fa-bars"></i></button>
                <div className="menu">
                    <div className="header-contact">
                        <div className="contact-info">
                            <div className="contact">
                                <i className="fa-sharp fa-light fa-phone-volume"></i><span>+46 (8) 121 470 50</span>
                            </div>
                            <div className="contact">
                                <i className="fa-light fa-envelope-dot"></i><span>info@crito.com</span>
                            </div>
                            <div className="contact last">
                                <i className="fa-sharp fa-light fa-location-dot"></i> <span>Sveavägen 31, 111 34
                                    STOCKHOLM</span>
                            </div>
                        </div>
                        <SocialMedia />
                    </div>
                    <div className="header-menu">
                        <div className="nav">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/services">Service</NavLink>
                            <NavLink to="/news">News</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </div>
                        <Button type='yellow' text='Login' />
                    </div>
                </div>
            </div>
    </header>
  )
}

export default Header