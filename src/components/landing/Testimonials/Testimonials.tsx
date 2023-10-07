import "./Testimonials.css";
import CommentImg from "./testimonialImg.svg";

const Testimonials = () => {
  return (
    <section id="testimonial">
      <div className="testimonial-child1">
        <h2>What People are Saying about us </h2>
        <p>Give a professional and elegant touch to your business records</p>
      </div>
      <div className="testimonial-child2">
        <div className="testimonial-child2-ch">
          <div className="testimonial-child2-ch-0">
            <img src={CommentImg} alt="comments" />
          </div>
          <div className="testimonial-child2-ch-1">
            CredHill helped me to efficiently manage my business and clients.{" "}
          </div>
          <div className="testimonial-child2-ch-2">
            <div className="testimonial-img"></div>
            <div>Boomer Joseph</div>
          </div>
        </div>
        <div className="testimonial-child2-ch">
          <div className="testimonial-child2-ch-0">
            <img src={CommentImg} alt="comments" />
          </div>
          <div className="testimonial-child2-ch-1">
            CredHill helped me to efficiently manage my business and clients.{" "}
          </div>
          <div className="testimonial-child2-ch-2">
            <div className="testimonial-img"></div>
            <div>Boomer Joseph</div>
          </div>
        </div>
        <div className="testimonial-child2-ch">
          <div className="testimonial-child2-ch-0">
            <img src={CommentImg} alt="comments" />
          </div>
          <div className="testimonial-child2-ch-1">
            CredHill helped me to efficiently manage my business and clients.{" "}
          </div>
          <div className="testimonial-child2-ch-2">
            <div className="testimonial-img"></div>
            <div>Boomer Joseph</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
