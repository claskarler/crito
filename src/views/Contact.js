import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SmallShowcase from '../components/Generics/SmallShowcase'
import ContactInfo from '../components/ContactInfoSection/ContactInfo'
import Message from '../components/MessageSection/Message'
import img_map from '../assets/images/Map.png'


const Contact = () => {
  return (
    <>
      <Header />
        <main>
          <SmallShowcase title = "Let's Connect"/>
          <ContactInfo />
          <Message />
          <section className="map">
           <img src={img_map} alt="Map of Crito's office location"/>
          </section>
        </main>
      <Footer />
    </>
  )
}

export default Contact