import React from "react";
import contact_img from "../../assets/contact-image.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-image-container">
        <img src={contact_img} alt="" />
        <div className="image-content">
          <h2>
            We will get back to you within
            <br />
            24 hours, or you can call us.
          </h2>
        </div>
      </div>
      <div className="contact-form-container">
        <h2 className="contact-title">REQUEST A QUOTE</h2>
        <form className="form-container">
          <div className="input-fileds">
            <select className="e-input" required>
              <option value="carbide_drills">Carbide Drills</option>
              <option value="carbide_inserts">Carbide inserts</option>
              <option value="inserts_holders"> inserts Holders</option>
            </select>
          </div>
          <div className="input-fileds">
            <textarea
              name=""
              id=""
              placeholder="Messages"
              className="e-input"
            ></textarea>
          </div>
          <div className="input-fileds">
            <input
              type="text"
              placeholder="Name"
              required
              className="e-input"
            />
          </div>
          <div className="input-fileds">
            <input
              type="text"
              placeholder="Company Name "
              required
              className="e-input"
            />
          </div>
          <div className="input-fileds">
            <input
              type="text"
              placeholder="Mobile / WhatsApp Number"
              required
              className="e-input"
            />
          </div>
          <div className="input-fileds">
            <input
              type="email"
              placeholder="Email"
              required
              className="e-input"
            />
          </div>
          <div className="input-fileds city-container">
            <div>
              <input
                type="text"
                placeholder="city"
                required
                className="e-input"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Country"
                required
                className="e-input"
              />
            </div>
          </div>
          {/* <div className="input-fileds">
            <input
              type="text"
              placeholder="Country"
              required
              className="e-input"
            />
          </div> */}
          <div className="input-fileds">
            <button className="btn-contact">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
