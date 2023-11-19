import React from 'react'

import Button from '../Generics/Button'

import img_backgroundlines from '../../assets/images/background-wavy-lines.svg'

const NewsletterSignup = () => {
  return (
    <section className="newsletter-signup">
        <img className="background-wavy-lines" src={img_backgroundlines}/>
        <div className="container">
            <h2>Get News Updates By Signup</h2>
            <div className="form-content">
              <form id="subscribeForm">
                <input className="error" type="email" placeholder="username@domain.com" />
                <Button type="yellow" text="Subscribe"/>
              </form>
            </div>
        </div>
    </section>
  )
}

export default NewsletterSignup