import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import serve_1 from "../../assets/serve-1.jpg";
import serve_2 from "../../assets/serve-2.jpg";
import serve_3 from "../../assets/serve-3.jpg";
import serve_4 from "../../assets/serve-4.jpg";
import serve_5 from "../../assets/serve-5.jpg";
import serve_6 from "../../assets/serve-6.jpg";
import serve_7 from "../../assets/serve-7.jpg";
import serve_8 from "../../assets/serve-8.jpg";
import serve_9 from "../../assets/serve-9.jpg";
import serve_10 from "../../assets/serve-10.jpg";

const Serve = () => {
  const data = [
    {
      id: 1,
      title: "Aerospace",
      image: serve_1,
    },
    {
      id: 2,
      title: "Automotive",
      image: serve_2,
    },
    {
      id: 3,
      title: "Surgical Equipment",
      image: serve_3,
    },
    {
      id: 4,
      title: "Oil & Gas Fabrication",
      image: serve_4,
    },
    {
      id: 5,
      title: "Metal Fabrication",
      image: serve_5,
    },
    {
      id: 6,
      title: "Railway",
      image: serve_6,
    },
    {
      id: 7,
      title: "Heavy Machinery",
      image: serve_7,
    },
    {
      id: 8,
      title: "Marine",
      image: serve_8,
    },
    {
      id: 9,
      title: "Furniture & Carpentry",
      image: serve_9,
    },
    {
      id: 10,
      title: "Construction",
      image: serve_10,
    },
  ];
  return (
    <div className="serve-container">
      <div className="quality-head-container">
        <h1 className="heading">INDUSTRIES WE SERVE</h1>
      </div>
      <div className="serve-card-container">
        <Swiper
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="serve-card">
                <img src={item.image} alt="" className="serve-card-images" />
                <div className="serve-card-title">
                  <h2>{item.title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Serve;
