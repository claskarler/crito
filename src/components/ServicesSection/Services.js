import React from 'react'
import './Services.css'
import img_backgroundlines from '../../assets/images/background-lines-right.svg'
import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'


const Services = () => {
  return (
    <section className="services">
        <img src={img_backgroundlines}/>
        <div className="container">
            <SectionTitle text="Our Services" title="We Provide The Best Service For Consulting"/>
            <div className="service-links">
                <a className="service-link" href="#">
                    <div className="link-content">
                        <div className="little-black-line"></div>
                        <h3>Business Advice</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="btn-circular" href="#"><i className="fa-regular fa-arrow-right"></i></div>
                    </div>
                </a>
                <a className="service-link" href="#">
                    <div className="link-content">
                        <div className="little-black-line"></div>
                        <h3>Startup Business</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="btn-circular" href="#"><i className="fa-regular fa-arrow-right"></i></div>
                    </div>
                </a>
                <a className="service-link" href="#">
                    <div className="link-content">
                        <div className="little-black-line"></div>
                        <h3>Financial Advice</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="btn-circular" href="#"><i className="fa-regular fa-arrow-right"></i></div>
                    </div>
                </a>
                <a className="service-link" href="#">
                    <div className="link-content">
                        <div className="little-black-line"></div>
                        <h3>Risk Management</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="btn-circular" href="#"><i className="fa-regular fa-arrow-right"></i></div>
                    </div>
                </a>
            </div>
            <div className="browse-services"><Button type= "transparent" text="Browse Services" url="/services/learn-more"/></div>
        </div>
    </section>
  )
}

export default Services