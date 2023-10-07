import "./WhyInvoicer.css";

const WhyInvoicer: React.FC = () => {
  return (
    <section id="whyInvoicer">
      <div className="whyInvoicerLeft">
        {" "}
        <h1>Why to choose CredHill?</h1>
        <p>
          CredHill provides solution to create stunningly beautiful invoices,
          provides record keeping functionalities and other business stats
        </p>
      </div>
      <div className="whyInvoicerRight">
        <div className="whyInvoicerCircle1">
          <div className="whyInvoicerCircle2">
            <div className="whyInvoicerCircle3"></div>
          </div>
        </div>
        <div className="whyInvoicerCDiv"></div>
        <div className="whyInvoicerCDiv2"></div>
        <div className="whyInvoicerCDiv3"></div>
      </div>
    </section>
  );
};

export default WhyInvoicer;
