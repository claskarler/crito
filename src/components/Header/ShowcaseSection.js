import React from 'react'
import img_backgroundlines from '../../assets/images/background-lines.svg'
import img_showcaseimage from '../../assets/images/showcase-image.svg'
import Button from '../Generics/Button'

function ShowcaseSection() {
  return (
    <section className="showcase">
        <img className="background-lines" src={img_backgroundlines} alt=""/>
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <div className="links">
                    <Button text="Get Consulting" url="/services/get-consulting"/>
                    <Button text="Learn More" url="/services/consulting"/>
                </div>
            </div>
            <img src={img_showcaseimage} alt="man in a suit looking at a tablet"/>
        </div>
    </section>
  )
}

export default ShowcaseSection