import Hero from "./components/Hero/Hero";
import "./styles.css";
import Testimonials from "./components/Testimonials/Testimonials";
import WhyInvoicer from "./components/WhyInvoicer/WhyInvoicer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyInvoicer />
      <Testimonials />
    </>
  );
}

export default App;
