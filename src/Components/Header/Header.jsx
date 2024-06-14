import "./Header.css";

import { headerBooks } from "../../Data/Data";
import headerShape from "../../assets/header-shape.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          Loop={true}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            prevEl: ".button-prev-slide ",
            nextEl: ".button-next-slide ",
          }}
        >
          {headerBooks.map(({ title, img, info, btnLink }, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="header-wrapper container">
                  {/* ---------------header left--------------- */}
                  <div className="header-left">
                    <h1>{title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: info }}></p>
                    <a className="btn btn-border" href={btnLink}>
                      Learn More
                    </a>
                  </div>
                  {/* ---------------header right--------------- */}
                  <div className="header-right">
                    <img src={img} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          {/* ---------------------header pagination----------------------*/}
          <div className="slider-button">
            <div className="button-prev-slide slidebutton">
              <IoIosArrowRoundBack />
            </div>
            <div className="button-next-slide slidebutton">
              <IoIosArrowRoundForward />
            </div>
          </div>

          {/* ---------------------header pagination----------------------*/}
          <div className="container">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>

        {/*------------------------ header shape -----------------------*/}
        <div className="header-shape">
          <img src={headerShape} alt="" />
        </div>
      </div>
    </header>
  );
}
