import React from 'react'

import img_critologotype from '../../assets/images/logotype.svg'
import Button from '../Generics/Button'

function NavSection() {
  return (
    <section className="nav-section">
            <div className="container">
                <img src={img_critologotype} alt="crito-logotype" id="crito-logotype"/>
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
                        <div className="social-media">
                            <a className="social-media-button fa-brands fa-facebook" href="https://facebook.com"
                                target="_blank"></a>
                            <a className="social-media-button fa-brands fa-twitter" href="https://twitter.com"
                                target="_blank"></a>
                            <a className="social-media-button fa-brands fa-instagram" href="https://instagram.com"
                                target="_blank"></a>
                            <a className="social-media-button fa-brands fa-linkedin" href="https://linkedin.com"
                                target="_blank"></a>
                        </div>
                    </div>
                    <div className="header-menu">
                        <div className="nav">
                            <a className="active" href="index.html">Home</a>
                            <a href="services.html">Service</a>
                            <a href="news.html">News</a>
                            <a href="contact.html">Contact</a>
                        </div>
                        <Button text='Login' />
                    </div>
                </div>
            </div>
        </section>
  )
}

export default NavSection