import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Brands from './components/BrandsSection/Brands';
import Features from './components/FeaturesSection/Features';
import About from './components/AboutSection/About';
import Services from './components/ServicesSection/Services';
import ChooseUs from './components/ChooseUsSection/ChooseUs';
import ProjectCase from './components/ProjectCaseSection/ProjectCase';
import MeetTeam from './components/MeetTeamSection/MeetTeam';
import Testimonial from './components/TestimonialSection/Testimonial';
import ArticleNews from './components/ArticleNewsSection/ArticleNews';
import NewsletterSignup from './components/NewsletterSignupSection/NewsletterSignup';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
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
    </div>
  );
}

export default App;
