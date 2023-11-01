import React from 'react'
import './Features.css'
import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'

const Features = () => {
  return (
    <section className="features">
        <div className="big-container">
            <div className="container">
                <div className="title">
                    <SectionTitle text="Features" title="Our Accounting is trusted by thousand of companies"/>
                    <Button type= "yellow" text="Learn More" url="/services/learn-more"/>
                </div>

                <div className="feature-list">
                    <div className="feature">
                        <i className="fa-regular fa-handshake"></i>
                        <h3>Business Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="feature">
                        <i className="fa-sharp fa-regular fa-lightbulb-on"></i>
                        <h3>Startup Business</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="feature">
                        <i className="fa-regular fa-chart-line"></i>
                        <h3>Financial Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="feature">
                        <i className="fa-regular fa-box-circle-check"></i>
                        <h3>Risk Management</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features