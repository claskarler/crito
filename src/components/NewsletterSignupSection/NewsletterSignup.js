import React from 'react'
import './NewsletterSignup.css'

import Button from '../Generics/Button'

import img_backgroundlines from '../../assets/images/background-wavy-lines.svg'

const NewsletterSignup = () => {
  return (
    <section className="newsletter-signup">
        <img className="background-wavy-lines" src={img_backgroundlines}/>
        <div className="container">
            <h2>Get News Updates By Signup</h2>
            <form>
                <input type="email" placeholder="username@domain.com"/>
                <Button type= "yellow" text="Subscribe"/>
            </form>
        </div>
    </section>
  )
}

export default NewsletterSignup