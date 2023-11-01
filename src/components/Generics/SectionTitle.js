import React from 'react'

const SectionTitle = ({title, text}) => {
  return (
    <div className="section-title">
        <p>{text}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default SectionTitle