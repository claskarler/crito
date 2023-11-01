import React from 'react'
import './About.css'
import img_whitelines from '../../assets/images/white-lines.png'
import img_samanthabrown from '../../assets/images/Samantha-Brown.png'

const About = () => {
  return (
    <section className="about-company">
        <div className="container">
            <div className="founder-section">
                <img className="background-lines" src={img_whitelines}/>
                <img src={img_samanthabrown}
                    alt="A woman walking down an office corridor with a laptop in her hand"/>
                <div className="about-founder">
                    <h3>Samantha Brown, <span>Founder</span></h3>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>
            </div>
            <div className="about-company-text">
                <div className="section-title">
                    <p className="about">About Company</p>
                    <h2>We Are Business Consulting & Credit Repair Experts</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse
                    obcaecati? Ex esse error voluptates iure vel totam eos.<br></br>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident
                    voluptate amet.</p>
                <div className="learn-video">
                    <a className="btn-black" href="company.html"><span>Learn More<i
                                className="fa-regular fa-arrow-up-right"></i></span></a>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default About