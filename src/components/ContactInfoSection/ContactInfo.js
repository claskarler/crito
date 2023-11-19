import React from 'react'
import ContactBox from '../Generics/ContactBox'

const ContactInfo = () => {
  return (
    <section className="contact-info">
    <div className="container">
        <div className="contact-boxes">
            <div className="contact-box">
                <div className="btn-circular"><i className="fa-sharp fa-solid fa-location-dot"></i></div>
                <div className="contact-text">
                    <h3>Visit us</h3>
                    <p>Sveavägen 31</p>
                    <p>111 34 STOCKHOLM</p>
                </div>
            </div>
            <div className="contact-box">
                <div className="btn-circular"><i className="fa-sharp fa-solid fa-phone"></i></div>
                <div className="contact-text">
                    <h3>Call us</h3>
                    <p>+46 (8) 121 470 50</p>
                    <p>+46 (8) 121 470 51</p>
                </div>
            </div>
            <div className="contact-box">
                <div className="btn-circular"><i className="fa-sharp fa-solid fa-envelope"></i></div>
                <div className="contact-text">
                    <h3>Email us</h3>
                    <p>info@crito.com</p>
                    <p>support@crito.com</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ContactInfo