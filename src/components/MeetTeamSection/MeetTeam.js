import React from 'react'
import './MeetTeam.css'

import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'
import TeamMember from '../Generics/TeamMember'

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
                <TeamMember image= {img_kristine} name= "Kristine Palmer" occupation="Chef Operation Officer" />
                <TeamMember image= {img_mark} name= "Mark Aubri" occupation="Senior Consultant" />
                <TeamMember image= {img_kimberly} name= "Kimberly Hansen" occupation="Senior Consultant" />
                <TeamMember image= {img_justin} name= "Justin Willoman" occupation="Senior Tech Consultant" />
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