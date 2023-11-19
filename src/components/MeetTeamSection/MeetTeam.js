import React from 'react'

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
                <TeamMember image= {img_kristine} name= "Kristine Palmer" occupation="Chef Operation Officer" alt="A woman with short wavy hair in a striped jacker"/>
                <TeamMember image= {img_mark} name= "Mark Aubri" occupation="Senior Consultant" alt="A man with shaved dark hair in a suit" />
                <TeamMember image= {img_kimberly} name= "Kimberly Hansen" occupation="Senior Consultant" alt="A woman with dark textured hair and a magazine in her lap" />
                <TeamMember image= {img_justin} name= "Justin Willoman" occupation="Senior Tech Consultant" alt ="A man with short brown hair in a black jacket"/>
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