import React from 'react'
import NavSection from './NavSection'
import ShowcaseSection from './ShowcaseSection'
import './Header.css'

const Header = () => {
  return (
    <header>
        <NavSection />
        <ShowcaseSection />
    </header>
  )
}

export default Header