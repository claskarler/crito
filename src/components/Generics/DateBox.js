import React from 'react'

const DateBox = ({date, month}) => {
  return (
    <div className="date-box">
        <h3>{date}</h3>
        <p>{month}</p>
    </div>
  )
}

export default DateBox