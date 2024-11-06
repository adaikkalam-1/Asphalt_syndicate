import Qualitative from "../../assets/w-qualitative.png";
import Dexterous_Team from "../../assets/Dexterous-Team.png";
import client_centric from "../../assets/w-client-centric.png";
import wide_range from "../../assets/wide-range-of-product.png";
import custimize_product from "../../assets/custimize-product.png";
import save_money from "../../assets/save-money.png";
import express_delivery from "../../assets/express-delivery.png";
import customer_img from "../../assets/w-customer.png";

const Quality = () => {
  const data = [
    {
      id: 1,
      name: "Qualitative product",
      images: Qualitative,
    },
    { id: 2, name: "Dexterous team of professionals", images: Dexterous_Team },
    { id: 3, name: "Client-centric approach", images: client_centric },
    { id: 4, name: "Wide range of products", images: wide_range },
    { id: 5, name: "Customized product", images: custimize_product },
    { id: 6, name: "CPC focused", images: save_money },
    { id: 7, name: "Prompt delivery", images: express_delivery },
    { id: 8, name: "Customer support", images: customer_img },
  ];

  return (
    <div className="quality-container">
      <div className="quality-head-container">
        <h1 className="heading">OUR PRODUCTS</h1>
        <p className="sub_paragraph-heading">
          ASPHALT SYNDICATE LLP is bound to share their expertise and support
          with customers to built a greater INDIA.
        </p>
      </div>

      <div className="quality-cart-container">
        {data.map((item) => (
          <div className="quality-cart" key={item.id}>
            <img src={item.images} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quality;
