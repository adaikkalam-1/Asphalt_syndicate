import footer_logo from "../../assets/footer-logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content1">
        <div className="footer-logo">
          <img src={footer_logo} alt="footer" />
        </div>
        <div className="border"></div>
        <div className="footer-contact-container">
          <div className="footer-contact">
            <h3 className="f-heading">Contact Info</h3>
            <ul>
              <li>Email: 123@example.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
          <div className="footer-address">
            <h3 className="f-heading">Our Address</h3>
            <p>123 Main St, chennai, tamil nadu, 600201 -india</p>
          </div>
        </div>
      </div>
      <div className="footer-content2">
        <div className="footer-map-containers">
          <div className="quick_link">
            <h3 className="f-heading">Quick links</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Our products</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
            <div className="download-catelog">
              <button>Download Catalogue</button>
            </div>
          </div>
          <div className="map-conatainer">
            <h3 className="f-heading">LOCATE US</h3>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1580.7979694430107!2d80.17875182996964!3d13.044234933786875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1730976829711!5m2!1sen!2sin"
              width="250"
              height="200"
              style={{ border: 0 }}
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
