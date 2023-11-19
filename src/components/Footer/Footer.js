import React from 'react'
import img_backgroundlinesright from '../../assets/images/background-lines-white-right.svg'
import img_logotype from '../../assets/images/logotype-white.svg'
import FooterList from '../Generics/FooterList'
import SocialMedia from '../Generics/SocialMedia'

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
                    <FooterList title="Company" item1="About" item2="Features" item3="Works" item4="Career" />
                    <FooterList title="Help" item1="Customer Support" item2="Delivery Details" item3="Terms & Conditions" item4="Privacy Policy" />
                    <FooterList title="Resources" item1="Free eBooks" item2="Development Tutorial" item3="How to - Blog" item4="Youtube Playlist" />
                    <FooterList title="Link" item1="Free eBooks" item2="Development Tutorial" item3="How to - Blog" item4="Youtube Playlist" />
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="copy">&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</div>
                <SocialMedia />
            </div>
        </div>
    </footer>
  )
}

export default Footer