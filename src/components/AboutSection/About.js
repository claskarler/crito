import React from 'react'

import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'

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
            <SectionTitle text="About Company" title="We Are Business Consulting & Credit Repair Experts"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse
                    obcaecati? Ex esse error voluptates iure vel totam eos.<br></br>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident
                    voluptate amet.</p>
                <div className="learn-video">
                    <Button type= "black" text="Learn More" url="/services/learn-more"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About