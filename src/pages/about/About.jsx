import about_img from "../../assets/abt-us-img-min.png";
import PUNCTUAL from "../../assets/Punctual-Delivery.png";
import PROFESSIONALS from "../../assets/Professionals-Team.png";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content1">
        <div className="sub-container">
          <div className="subtitle">Welcome To</div>
        </div>
        <div className="">
          <h1 className="heading">ASPHALT SYNDICATE LLP</h1>
          <p className="paragraph">
            We, ASPHALT SYNDICATE LLP Specialise in tools application
            engineering. We are mainly focused in solid carbide endmill &
            ballnose, carbide drills, carbide inserts, circular saw blade,
            Bi-metal band saw blade. We are one of the Pioneers in Tool
            Engineering and with The practical experience in metal cutting tools
            & its various applications, we are in a position to render our
            technical services & bring down your tool cost per component.
          </p>
        </div>
        <div className="about-delivery-container">
          <div className="delivery-content">
            <div className="about-img-container">
              <img src={PUNCTUAL} alt="punctual Delivery" />
            </div>
            <div className="">
              <h2 className="sub-heading">PUNCTUAL DELIVERY</h2>
              <p className="paragraph">
                On time delivery is the metric used to measure supply chain
                efficiency. This KPI shows whether or not an organization is
                meeting its goals in regards to promised delivery times, and is
                critical for both measuring carrier performance and maintaining
                customer satisfaction.
              </p>
            </div>
          </div>
          <div className="delivery-content">
            <div className="about-img-container">
              <img src={PROFESSIONALS} alt="punctual Delivery" />
            </div>
            <div className="">
              <h2 className="sub-heading">PROFESSIONALS TEAM</h2>
              <p className="paragraph">
                A team is defined as a group of people who perform
                interdependent tasks to work toward accomplishing a common
                mission or specific objective. A Particular team developing a
                new product, or a continuous process improvement team organized
                to solve a particular problem.
              </p>
            </div>
          </div>
        </div>
        <div className="about-btn">
          <button className="readmore_btn">
            Read More <FaArrowRight className="readmore-btn-arrow" />
          </button>
        </div>
      </div>
      <div className="about-content-2">
        <img src={about_img} alt="" />
      </div>
    </div>
  );
};

export default About;
