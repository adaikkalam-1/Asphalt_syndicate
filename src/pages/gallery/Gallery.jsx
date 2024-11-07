import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import serve_1 from "../../assets/gallery-1.jpg";
import serve_2 from "../../assets/gallery-2.jpg";
import serve_3 from "../../assets/gallery-3.jpg";
import serve_4 from "../../assets/gallery-4.jpg";
import serve_5 from "../../assets/gallery-5.jpg";
import serve_6 from "../../assets/gallery-6.jpg";
import { FaArrowRight } from "react-icons/fa";

const Gallery = () => {
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
  ];
  return (
    <div className="gallery-container">
      <div className="gallery-head-container">
        <div>
          <h1 className="heading">Gallery</h1>
        </div>
        <div className="gallery-btn">
          <button className="readmore_btn">
            Read More <FaArrowRight className="readmore-btn-arrow" />
          </button>
        </div>
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
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="gallery-card">
                <img src={item.image} alt="" className="gallery-card-images" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
