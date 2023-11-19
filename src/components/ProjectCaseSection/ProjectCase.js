import React from 'react'

import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'

import img_articleone from '../../assets/images/article-img-1.png'
import img_articletwo from '../../assets/images/article-img-2.png'
import img_articlethree from '../../assets/images/article-img-3.png'
import img_articlefour from '../../assets/images/article-img-4.png'


const ProjectCase = () => {
  return (
    <section className="project-case">
        <div className="container">
        <SectionTitle text="Project & Case Studies" title="Let’s Looks Our Global Projects"/>
            <div className="project-case-grid">
                <a className="article" href="#">
                    <img src={img_articleone} alt="Person wearing a suit holding a business magazine"/>
                    <h3>Grow your business</h3>
                    <div className="read-more">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                </a>
                <a className="article" href="#">
                    <img src={img_articletwo}
                        alt="A pair of glasses, a digital watch and a digital pen laying on a pink tablet"/>
                    <h3>Why your client needs a responsive website</h3>
                    <div className="read-more">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                </a>
                <a className="article" href="#">
                    <img src={img_articlethree} alt="A desk with a notebook, laptop, ruler and a mug"/>
                    <h3>Educate your employees to get better results</h3>
                    <div className="read-more">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                </a>
                <a className="article" href="#">
                    <img src={img_articlefour} alt="A laptop showing various graphs"/>
                    <h3>Business Insights is a important piece of your business</h3>
                    <div className="read-more">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                </a>
            </div>
            <div className="center-item">
                <Button type= "black" text="All Recent Projects" url="/services/projects"/>
            </div>
        </div>
    </section>
  )
}

export default ProjectCase