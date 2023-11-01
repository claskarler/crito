import React from 'react'
import './ChooseUs.css'
import img_chooseus from '../../assets/images/why-choose-us.png'
import SectionTitle from '../Generics/SectionTitle'

const ChooseUs = () => {
  return (
    <section className="choose-us">
        <div className="background-box"></div>
        <div className="container">
            <div className="choose-us-text">
                <SectionTitle text="Why Choose Us" title="Why We Are The Best Business Consulting Agency"/>
                <div className="reasons-list">
                    <div className="reason 1">
                        <div className="icon-circular"><i className="fa-light fa-thumbs-up"></i></div>
                        <div className="reason-text">
                            <h3>Process Excellence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="reason 2">
                        <div className="icon-circular"><i className="fa-light fa-chart-radar"></i></div>
                        <div className="reason-text">
                            <h3>Strategic Planning</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="reason 3">
                        <div className="icon-circular"><i className="fa-light fa-pen-nib"></i></div>
                        <div className="reason-text">
                            <h3>Experience Design</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="reason 4">
                        <div className="icon-circular"><i className="fa-light fa-head-side-gear"></i></div>
                        <div className="reason-text">
                            <h3>Artificial Inteligence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={img_chooseus}/>
        </div>
    </section>
  )
}

export default ChooseUs