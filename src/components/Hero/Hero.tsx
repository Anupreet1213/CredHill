import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="heroSection">
      <div className="heroSectionFront">
        <h1>Create simple and beautiful invoices with comfort of few clicks</h1>
        <div className="heroButtons">
          <div>Sign In</div>
          <div>Register</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
