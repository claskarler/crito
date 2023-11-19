import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import img_backgroundlines from '../../assets/images/background-lines.svg'

const SmallShowcase = ({title}) => {
  return (
    <section className="contact-showcase">
    <img className="background-lines" src={img_backgroundlines} alt=""/>
    <div className="container">
        <div className="content">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/news">News</NavLink>
            <h1>{title}</h1>
        </div>
    </div>
</section>
  )
}

export default SmallShowcase