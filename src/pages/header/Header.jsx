import edit_remove from "../../assets/Edit-removebg-preview.png";

const Header = () => {
  return (
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
  );
};

export default Header;
