// import imgs from "../../assets/asphalt-main-logo.png";
// import { IoLogoFacebook } from "react-icons/io";
// import { CiInstagram, CiLinkedin } from "react-icons/ci";
// const Navbar = () => {
//   return (
//     <div className="navbar-container">
//       <div className="navbar-logo">
//         <img src={imgs} alt="logo" className="navbar-logo-img" />
//       </div>
//       <ul className="nav-link">
//         <li>Home</li>
//         <li>About us</li>
//         <li>Our Products</li>
//         <li>Gallery</li>
//         <li>Contact Us</li>
//       </ul>
//       <div className="nav-social-container">
//         <IoLogoFacebook className="nav-icon" />
//         <CiInstagram className="nav-icon" />
//         <CiLinkedin className="nav-icon" />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import imgs from "../../assets/asphalt-main-logo.png";
import { IoLogoFacebook } from "react-icons/io";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const handleNavClick = (link) => {
    setActive(link);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={imgs} alt="logo" className="navbar-logo-img" />
      </div>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-link ${isMobileMenuOpen ? "nav-link-mobile" : ""}`}>
        <li>
          <Link
            to="/"
            onClick={() => handleNavClick("home")}
            className={active === "home" ? "active-link" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => handleNavClick("about")}
            className={active === "about" ? "active-link" : ""}
          >
            About us
          </Link>
        </li>
        <li>Our Products</li>
        <li>Gallery</li>
        <li>Contact Us</li>
      </ul>

      {/* Social icons, hidden on mobile */}
      <div className="nav-social-container">
        <IoLogoFacebook className="nav-icon" />
        <CiInstagram className="nav-icon" />
        <CiLinkedin className="nav-icon" />
      </div>
    </div>
  );
};

export default Navbar;
