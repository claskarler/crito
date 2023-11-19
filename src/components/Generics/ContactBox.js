import React from 'react'

 export const ContactBox = ({icon, text, adress1, adress2}) => {

  return (
    <div class="contact-box">
                <div className="btn-circular">{icon}</div>
                <div className="contact-text">
                    <h3>{text}</h3>
                    <p>{adress1}</p>
                    <p>{adress2}</p>
                </div>
            </div>
  )
}

export default ContactBox