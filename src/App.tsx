import Hero from "./components/Hero/Hero";
import "./styles.css";
import Testimonials from "./components/Testimonials/Testimonials";
import WhyInvoicer from "./components/WhyInvoicer/WhyInvoicer";
import Navbar from "./components/Navbar/Navbar";
import Features from "./components/Features/Features";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyInvoicer />
      <Testimonials />
      <Features />
    </>
  );
}

export default App;
