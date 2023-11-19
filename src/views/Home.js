import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Showcase from '../components/ShowcaseSection/Showcase';
import Brands from '../components/BrandsSection/Brands';
import Features from '../components/FeaturesSection/Features';
import About from '../components/AboutSection/About';
import Services from '../components/ServicesSection/Services';
import ChooseUs from '../components/ChooseUsSection/ChooseUs';
import ProjectCase from '../components/ProjectCaseSection/ProjectCase';
import MeetTeam from '../components/MeetTeamSection/MeetTeam';
import Testimonial from '../components/TestimonialSection/Testimonial';
import ArticleNews from '../components/ArticleNewsSection/ArticleNews';
import NewsletterSignup from '../components/NewsletterSignupSection/NewsletterSignup';

const Home = () => {
  return (
      <>
        <Header />
          <main>
            <Showcase />
            <Brands />
            <Features />
            <About />
            <Services />
            <ChooseUs />
            <ProjectCase />
            <MeetTeam />
            <Testimonial />
            <ArticleNews />
            <NewsletterSignup />
          </main>
        <Footer />
      </>
  )
}

export default Home