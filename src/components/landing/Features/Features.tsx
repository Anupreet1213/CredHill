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
          CredHill helps you to check and maintain your financial records such
          as tax management and inventory saving time manpower
        </p>
        <div className="featuresLeftButton">Get Started</div>
      </div>
      <div className="featuresRight">
        <div className="featureRightChild1">
          <div className="featureRightChild1-1">
            <img src={Star} />
          </div>
          <div className="featureRightChild1-2">
            <h4>Easy Accessibility</h4>
            <p>Easy to Login, Register and making invoices even easier</p>
          </div>
        </div>
        <div className="featureRightChild2">
          <div className="featureRightChild2-1">
            <img src={Secured} />
          </div>
          <div className="featureRightChild2-2">
            <h4>100% Secured</h4>
            <p>We take proactive steps to secure your personal business data</p>
          </div>
        </div>
        <div className="featureRightChild3">
          <div className="featureRightChild3-1">
            <img src={Send} />
          </div>
          <div className="featureRightChild3-2">
            <h4>Easy Sharing</h4>
            <p>Share your invoices over mail, Whatsapp etc.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
