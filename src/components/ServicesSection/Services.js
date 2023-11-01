import React from 'react'
import './Services.css'
import img_backgroundlines from '../../assets/images/background-lines-right.svg'

const Services = () => {
  return (
    <section className="services">
        <img src={img_backgroundlines}/>
        <div className="container">
            <div className="section-title">
                <p>Our Services</p>
                <h2>We Provide The Best Service For Consulting</h2>
            </div>
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
            <div className="browse-services"><a className="btn-transparent" href="services.html"><span>Browse Services<i
                            className="fa-regular fa-arrow-up-right"></i></span></a></div>
        </div>
    </section>
  )
}

export default Services