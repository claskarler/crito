import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SmallShowcase from '../components/Generics/SmallShowcase'

const News = () => {
  return (
    <>
      <Header />
        <main>
          <SmallShowcase title = "News & Articles"/>
        </main>
      <Footer />
    </>
  )
}

export default News