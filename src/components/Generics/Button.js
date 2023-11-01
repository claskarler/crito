import React from 'react'

export const Button = ({type, text, url}) => {

  const getButtonClassName = () => {
    switch(type) {
      case 'yellow':
        return 'btn-yellow'
      case 'black':
        return 'btn-black'
      default:
        return 'btn-transparent'
    }
  }

  return (
    <a className={getButtonClassName()} href={url}>
    <span>{text}
    <i className="fa-regular fa-arrow-up-right"></i></span>
    </a>
  )
}

export default Button
