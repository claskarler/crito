import React from 'react'

export const Button = ({text, url}) => {
  return (
    <a className="btn-yellow" href={url}>
    <span>{text}
    <i className="fa-regular fa-arrow-up-right"></i></span>
    </a>
  )
}

export default Button
