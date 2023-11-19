import React from 'react'
import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'

import img_cassandra from '../../assets/images/Cassandra.png'
import img_amanda from '../../assets/images/Amanda.png'
import img_jack from '../../assets/images/Jack.png'

const Testimonial = () => {
  return (
    <section className="testimonial">
    <div className="big-container">
        <div className="container">
            <SectionTitle text="Testimonial" title="What Our Client Says"/>
            <div className="testimonial-grid">
                <div className="client-testimonial">
                    <div className="rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div className="rating-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
                        libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                        voluptate</div>
                    <div className="client-info">
                        <img src={img_cassandra}/>
                        <div className="info-text">
                            <h3>Cassandra Warren</h3>
                            <p>Business Manager, Dorfus</p>
                        </div>
                    </div>
                </div>
                <div className="client-testimonial">
                    <div className="rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div className="rating-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
                        libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                        voluptate</div>
                    <div className="client-info">
                        <img src={img_amanda}/>
                        <div className="info-text">
                            <h3>Amanda Tulling</h3>
                            <p>Senior Developer, Square</p>
                        </div>
                    </div>
                </div>
                <div className="client-testimonial">
                    <div className="rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div className="rating-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
                        libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                        voluptate</div>
                    <div className="client-info">
                        <img src={img_jack}/>
                        <div className="info-text">
                            <h3>Jack McDogglas</h3>
                            <p>Key Account Manager, Gobona</p>
                        </div>
                    </div>
                </div>
            </div>
            <Button type= "black" text="All Reviews" url="/services/reviews"/>
        </div>
    </div>

</section>
  )
}

export default Testimonial