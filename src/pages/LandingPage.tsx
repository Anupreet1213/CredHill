import Navbar from '../components/landing/Navbar/Navbar';
import Hero from '../components/landing/Hero/Hero';
import WhyInvoicer from '../components/landing/WhyInvoicer/WhyInvoicer';
import Testimonials from '../components/landing/Testimonials/Testimonials';
import Features from '../components/landing/Features/Features';
import AboutUs from '../components/landing/AboutUs/AboutUs';
import "../styles.css";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyInvoicer />
      <Testimonials />
      <Features />
      <AboutUs />
    </>
  );
};

export default LandingPage;
