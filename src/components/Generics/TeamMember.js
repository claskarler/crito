import React from 'react'

const TeamMember = ({image, name, occupation}) => {
  return (
    <div className="team-member">
        <img src={image}/>
        <h3>{name}</h3>
        <p>{occupation}</p>
    </div>
  )
}

export default TeamMember