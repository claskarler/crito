import React from 'react'
import './MeetTeam.css'

import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'

import img_kristine from '../../assets/images/Kristine.png'
import img_mark from '../../assets/images/Mark.png'
import img_kimberly from '../../assets/images/Kimberly.png'
import img_justin from '../../assets/images/Justin.png'

const MeetTeam = () => {
  return (
    <section className="meet-team">
        <div className="container">
            <div className="team-header">
                <SectionTitle text="Meet Our Team" title="Experience Team Members"/>
                <Button type= "transparent" text="Browse Team" url="/meet-our-team"/>
            </div>
            <div className="team">
                <div className="team-member">
                    <img src={img_kristine}/>
                    <h3>Kristine Palmer</h3>
                    <p>Chef Operation Officer</p>
                </div>
                <div className="team-member">
                    <img src={img_mark}/>
                    <h3>Mark Aubri</h3>
                    <p>Senior Consultant</p>
                </div>
                <div className="team-member">
                    <img src={img_kimberly}/>
                    <h3>Kimberly Hansen</h3>
                    <p>Senior Consultant</p>
                </div>
                <div className="team-member">
                    <img src={img_justin}/>
                    <h3>Justin Willoman</h3>
                    <p>Senior Tech Consultant</p>
                </div>
            </div>
            <div className="scroll">
                <div className="button-container">
                    <div className="scroll-circle"></div>
                    <div className="active scroll-circle"></div>
                    <div className="scroll-circle"></div>
                    <div className="scroll-circle"></div>
                    <div className="scroll-circle"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MeetTeam