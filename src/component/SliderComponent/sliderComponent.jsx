import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import Slider from "../../image/slider.png";
import Slider1 from "../../image/slider2.png";

function SliderComponent() {
  return (
    <div id="slider">
      <div className="container">
        <div className="slider">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            // slidesPerView={2}
            // centeredSlides={false}
            // slidesPerGroupSkip={1}
            // grabCursor={true}
            // keyboard={{
            //   enabled: true,
            // }}
            // breakpoints={{
            //   769: {
            //     slidesPerView: 4,
            //     slidesPerGroup: 3,
            //   },
            // }}
            // // scrollbar={true}
            // navigation={true}
            // // pagination={{
            // //   clickable: true,
            // // }}
            // modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          >
            <SwiperSlide>
              <div className="slider_text">
                <h2>Как проходят наши уроки?</h2>
                <div className="slider_img">
                  <img src={Slider} alt="" />
                  <div className="slider_title">
                    <h3>Habitant at sed tincidunt sapien. </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Habitant at sed
                      tincidunt sapien.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_text">
                <h2>Как проходят наши уроки?</h2>
                <div className="slider_img">
                  <img src={Slider1} alt="" />
                  <div className="slider_title">
                    <h3>Habitant at sed tincidunt sapien. </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Habitant at sed
                      tincidunt sapien.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_text">
                <h2>Как проходят наши уроки?</h2>
                <div className="slider_img">
                  <img src={Slider} alt="" />
                  <div className="slider_title">
                    <h3>Habitant at sed tincidunt sapien. </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Habitant at sed
                      tincidunt sapien.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_text">
                <h2>Как проходят наши уроки?</h2>
                <div className="slider_img">
                  <img src={Slider1} alt="" />
                  <div className="slider_title">
                    <h3>Habitant at sed tincidunt sapien. </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Habitant at sed
                      tincidunt sapien.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SliderComponent;
