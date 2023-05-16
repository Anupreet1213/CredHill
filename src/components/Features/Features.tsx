import React from "react";
import "./Feature.css";
import Star from "./Star.png";
import Secured from "./Secured.png";
import Send from "./Send.png";

const Features: React.FC = () => {
  return (
    <section id="features">
      <div className="featuresLeft">
        <h2>Maintain your records with powerful interactive charts</h2>
        <p>
          Invoicer helps you to check and maintain your financial records such
          as tax management and inventory saving time manpower
        </p>
        <button>Get Started</button>
      </div>
      <div className="featuresRight">
        <div className="featureRightChild1">
          <img src={Star} />
          <h4>Easy Accessibility</h4>
          <p>Easy to Login, Register and making invoices even easier</p>
        </div>
        <div className="featureRightChild2">
          <img src={Secured} />
          <h4>Easy Accessibility</h4>
          <p>Easy to Login, Register and making invoices even easier</p>
        </div>
        <div className="featureRightChild3">
          <img src={Send} />
          <h4>Easy Accessibility</h4>
          <p>Easy to Login, Register and making invoices even easier</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
