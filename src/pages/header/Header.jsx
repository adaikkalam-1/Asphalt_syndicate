import edit_remove from "../../assets/Edit-removebg-preview.png";
import About from "../about/About";
import Client from "../clients/Client";
import Contact from "../contact/Contact";
import Gallery from "../gallery/Gallery";
import Product from "../product/Product";
import Quality from "../quality/Quality";
import Serve from "../serve/Serve";

const Header = () => {
  return (
    <>
      <div className="header_img">
        <div className="header-container">
          <div className="header_content1">
            <h1>
              Pioneer in Tool <span className="header-border">Engineering</span>{" "}
            </h1>
          </div>
          <div className="header_content2">
            <img
              src={edit_remove}
              alt="preview image"
              className="header-preview-img"
            />
          </div>
        </div>
      </div>
      <section className="about-section">
        <About />
      </section>
      <section className="product-section">
        <Product />
      </section>
      <section className="client-section">
        <Client />
      </section>
      <section className="quality-section">
        <Quality />
      </section>
      <section className="contact-section">
        <Contact />
      </section>
      <section className="serve-section">
        <Serve />
      </section>
      <section className="gallery-section">
        <Gallery />
      </section>
    </>
  );
};

export default Header;
