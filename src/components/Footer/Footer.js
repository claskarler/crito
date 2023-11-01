import React from 'react'
import './Footer.css'
import img_backgroundlinesright from '../../assets/images/background-lines-white-right.svg'
import img_logotype from '../../assets/images/logotype-white.svg'

const Footer = () => {
  return (
    <footer>
        <div className="footer-top">
            <img className="background-lines-white-right" src={img_backgroundlinesright}/>
            <div className="container">
                <div className="crito-about">
                    <img src={img_logotype} alt="crito-logotype"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates!
                        Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
                <div className="link-grid">
                    <div className="link-container">
                        <div className="link-header">Company</div>
                        <div className="link-list">
                            <a className="link">About</a>
                            <a className="link">Features</a>
                            <a className="link">Works</a>
                            <a className="link">Career</a>
                        </div>
                    </div>
                    <div className="link-container">
                        <div className="link-header">Help</div>
                        <div className="link-list">
                            <a className="link">Customer Support</a>
                            <a className="link">Delivery Details</a>
                            <a className="link">Terms & Conditions</a>
                            <a className="link">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="link-container">
                        <div className="link-header">Resources</div>
                        <div className="link-list">
                            <a className="link">Free eBooks</a>
                            <a className="link">Development Tutorial</a>
                            <a className="link">How to - Blog</a>
                            <a className="link">Youtube Playlist</a>
                        </div>
                    </div>
                    <div className="link-container">
                        <div className="link-header">Link</div>
                        <div className="link-list">
                            <a className="link">Free eBooks</a>
                            <a className="link">Development Tutorial</a>
                            <a className="link">How to - Blog</a>
                            <a className="link">Youtube Playlist</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="copy">&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</div>
                <div className="social-media">
                    <a className="social-media-button fa-brands fa-facebook" href="https://facebook.com"
                        target="_blank"></a>
                    <a className="social-media-button fa-brands fa-twitter" href="https://twitter.com" target="_blank"></a>
                    <a className="social-media-button fa-brands fa-instagram" href="https://instagram.com"
                        target="_blank"></a>
                    <a className="social-media-button fa-brands fa-linkedin" href="https://linkedin.com"
                        target="_blank"></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer