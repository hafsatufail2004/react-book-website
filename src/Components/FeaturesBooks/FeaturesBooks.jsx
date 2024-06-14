import React from "react";

import "./FeaturesBooks.css";
import { featuredBooksData } from "../../Data/Data";
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// import react icons
import { BsArrowReturnRight } from "react-icons/bs";

const breakpoints = {
  1024: {
    slidesPerView: 4,
    spaceBetweenSlides: 30,
  },
  768: {
    slidesPerView: 3,
    spaceBetweenSlides: 20,
  },
  480: {
    slidesPerView: 2,
    spaceBetweenSlides: 10,
  },
  0: {
    slidesPerView: 1,
    spaceBetweenSlides: 0,
  },
};

export default function FeaturesBooks() {
  return (
    <section className="Featured">
      <div className="container feature-book-container">
        {/* --------------title props-------------- */}
        <TitleTypeOne
          TitleTop={"Some Quality Items"}
          Title={"Featured Books"}
        />

        {/* -------------------featured book swiper------------------ */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={4}
          Loop={true}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          breakpoints={breakpoints}
        >
          {featuredBooksData.map(
            ({ img, imgLlink, nameLink, name, writer, price }, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="featurebook-box">
                    <Link to={imgLlink}>
                      <img src={img} alt="image" className="featurebook" />
                    </Link>
                    <div className="featurebook-info">
                      <Link to={nameLink}>
                        <h4>{name}</h4>
                      </Link>
                      <div>
                        <small>{writer}</small>
                      </div>
                      <h5>
                        <span>{price}</span>
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          )}
          <div className="feature-border container"></div>
          {/* -------------------swiper pagination-------------------- */}
          <div className="swiper-pagination"></div>

          {/* ----------------view  all product button----------------- */}
          <Link to="*" className="btn feature-btn">
            View All Products <BsArrowReturnRight />
          </Link>
        </Swiper>
      </div>
    </section>
  );
}
