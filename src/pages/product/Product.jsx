import { FaArrowRight } from "react-icons/fa";
import Carbide_endmill1ft from "../../assets/Carbide-endmill1ft.jpg";
import Carbide_drills from "../../assets/carbide-drill-1ft.jpg";
import Carbide_insert from "../../assets/carbide-insert-ft1.jpg";
import Insert_Holders from "../../assets/Insert-Holders-ft.jpg";
import Circular_saw_blade from "../../assets/circular-saw-blade-1ft.jpg";
import Bi_Metal_Band from "../../assets/bi-metal-band-saw-blade-1ft.jpg";
const data = [
  {
    id: 1,
    name: "Carbide Endmill",
    description:
      "ASPHALT Solid carbide end mills are produced from ultra fine micro grain carbide that has high resistance towards wear and tear. And when combined with titanium nitride (TiN) and TIALN coatings, these end mills are capable for machining materials that have hardness of up to 55 HRC.",
    images: Carbide_endmill1ft,
  },
  {
    id: 2,
    name: "Carbide Drills",
    description:
      "Solid carbide drills are a great option for excellent process security, manufacturing economy and good hole quality. They provide the best combination of penetration rate and precision.",
    images: Carbide_drills,
  },
  {
    id: 3,
    name: "Carbide Inserts",
    description:
      "ASPHALT Provides replaceable and indexable range of carbide inserts for Turning , Milling and Hole making operations for the different material like steel, alloys , cast iron and hardened materials.",
    images: Carbide_insert,
  },
  {
    id: 4,
    name: "Insert-Holders",
    description: "We have wide range of holder available for milling inserts.",
    images: Insert_Holders,
  },
  {
    id: 5,
    name: "Circular Saw Blade",
    description:
      "Asphalt uses high grade CERMET alloy tip, Within the special grinding machine, ASPHALT cold saw blade will become your best friend in metal cutting.",
    images: Circular_saw_blade,
  },
  {
    id: 6,
    name: "Bi-Metal Band Saw Blade",
    description:
      "ASPHALT uses high grade raw material From German, UK and France base companies for baking tooth making.",
    images: Bi_Metal_Band,
  },
];

const Product = () => {
  return (
    <div className="product-container">
      <div className="product-head-container">
        <div className="">
          <h1 className="heading">OUR PRODUCTS</h1>
          <p className="sub_paragraph-heading">
            ASPHALT SYNDICATE LLP is bound to share their expertise <br />
            and support with customers to built a greater INDIA.
          </p>
        </div>
        <div className="product-btn">
          <button className="readmore_btn">
            Read More <FaArrowRight className="readmore-btn-arrow" />
          </button>
        </div>
      </div>
      <div className="products-card-container">
        {data.map((item, i) => (
          <div className="product-card" key={item.id} >
            <div className="product-img-container">
              <img src={item.images} alt="" />
            </div>
            <div className="product-content">
              <h3 className="cart_title">{item.name}</h3>
              <p className="paragraph">{item.description}</p>
            </div>
            <div className="about-btn">
              <button className="readmore_btn">
                Read More <FaArrowRight className="readmore-btn-arrow" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
