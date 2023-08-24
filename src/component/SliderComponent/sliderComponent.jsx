import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import "./slider.css";
import { Zoom, Navigation, Pagination } from "swiper/modules";
import Slider from "../../image/slider.png";
import Slider1 from "../../image/slider2.png";
import Bg from "../../image/slider-bg.png";

function SliderComponent() {
  return (
    <div id="slider">
      <div className="container">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="slider"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".slider_prev",
              nextEl: ".slider_next",
            }}
            zoom={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Zoom, Navigation]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="slider_text">
                <h2>Как проходят наши уроки?</h2>
                <div
                  style={{
                    backgroundImage: `url("${Slider}")`,
                    width: "100%",
                    height: "353px",

                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  className="slider_img"
                >
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
                <h3 className="slider_h3">
                  Habitant at sed tincidunt sapien. Purus maecenas risus mattis
                  duis arcu se.
                </h3>
                <div
                  style={{
                    backgroundImage: `url("${Slider1}")`,
                    width: "100%",
                    height: "353px",

                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  className="slider_img"
                >
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
                <div
                  style={{
                    backgroundImage: `url("${Slider}")`,
                    width: "100%",
                    height: "353px",

                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  className="slider_img"
                >
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
          <div class="slider_buttons">
            <button class="slider_prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="#5699E8"
              >
                <g opacity="0.2">
                  <path
                    d="M18.875 25.5417C19.1805 25.8473 19.5628 25.9928 20.0216 25.9784C20.4794 25.965 20.8611 25.8056 21.1666 25.5C21.4722 25.1945 21.625 24.8056 21.625 24.3334C21.625 23.8612 21.4722 23.4723 21.1666 23.1667L19.6666 21.6667L25.0416 21.6667C25.5139 21.6667 25.9028 21.5067 26.2083 21.1867C26.5139 20.8678 26.6666 20.4723 26.6666 20C26.6666 19.5278 26.5072 19.1317 26.1883 18.8117C25.8683 18.4928 25.4722 18.3334 25 18.3334L19.6666 18.3334L21.2083 16.7917C21.5139 16.4862 21.66 16.1039 21.6466 15.645C21.6322 15.1873 21.4722 14.8056 21.1666 14.5C20.8611 14.1945 20.4722 14.0417 20 14.0417C19.5278 14.0417 19.1389 14.1945 18.8333 14.5L14.5 18.8334C14.1666 19.1667 14 19.5556 14 20C14 20.4445 14.1666 20.8334 14.5 21.1667L18.875 25.5417ZM20 36.6667C17.6944 36.6667 15.5278 36.2289 13.5 35.3534C11.4722 34.4789 9.70831 33.2917 8.20831 31.7917C6.70831 30.2917 5.52109 28.5278 4.64665 26.5C3.77109 24.4723 3.33331 22.3056 3.33331 20C3.33331 17.6945 3.77109 15.5278 4.64665 13.5C5.52109 11.4723 6.70831 9.70837 8.20831 8.20837C9.70831 6.70837 11.4722 5.5206 13.5 4.64504C15.5278 3.7706 17.6944 3.33337 20 3.33337C22.3055 3.33337 24.4722 3.7706 26.5 4.64504C28.5278 5.5206 30.2916 6.70837 31.7916 8.20837C33.2916 9.70837 34.4789 11.4723 35.3533 13.5C36.2289 15.5278 36.6666 17.6945 36.6666 20C36.6666 22.3056 36.2289 24.4723 35.3533 26.5C34.4789 28.5278 33.2916 30.2917 31.7916 31.7917C30.2916 33.2917 28.5278 34.4789 26.5 35.3534C24.4722 36.2289 22.3055 36.6667 20 36.6667ZM20 33.3334C23.6944 33.3334 26.8405 32.035 29.4383 29.4384C32.035 26.8406 33.3333 23.6945 33.3333 20C33.3333 16.3056 32.035 13.1595 29.4383 10.5617C26.8405 7.96504 23.6944 6.66671 20 6.66671C16.3055 6.66671 13.16 7.96504 10.5633 10.5617C7.96553 13.1595 6.66665 16.3056 6.66665 20C6.66665 23.6945 7.96553 26.8406 10.5633 29.4384C13.16 32.035 16.3055 33.3334 20 33.3334Z"
                    fill="black"
                  />
                </g>
              </svg>
            </button>
            <button class="slider_next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="#5699E8"
              >
                <path
                  d="M21.125 14.4583C20.8194 14.1527 20.4372 14.0072 19.9783 14.0216C19.5205 14.035 19.1389 14.1944 18.8333 14.5C18.5278 14.8055 18.375 15.1944 18.375 15.6666C18.375 16.1388 18.5278 16.5277 18.8333 16.8333L20.3333 18.3333H14.9583C14.4861 18.3333 14.0972 18.4933 13.7917 18.8133C13.4861 19.1322 13.3333 19.5277 13.3333 20C13.3333 20.4722 13.4928 20.8683 13.8117 21.1883C14.1317 21.5072 14.5278 21.6666 15 21.6666H20.3333L18.7917 23.2083C18.4861 23.5138 18.34 23.8961 18.3533 24.355C18.3678 24.8127 18.5278 25.1944 18.8333 25.5C19.1389 25.8055 19.5278 25.9583 20 25.9583C20.4722 25.9583 20.8611 25.8055 21.1667 25.5L25.5 21.1666C25.8333 20.8333 26 20.4444 26 20C26 19.5555 25.8333 19.1666 25.5 18.8333L21.125 14.4583ZM20 3.33329C22.3055 3.33329 24.4722 3.77107 26.5 4.64663C28.5278 5.52107 30.2917 6.70829 31.7917 8.20829C33.2917 9.70829 34.4789 11.4722 35.3533 13.5C36.2289 15.5277 36.6667 17.6944 36.6667 20C36.6667 22.3055 36.2289 24.4722 35.3533 26.5C34.4789 28.5277 33.2917 30.2916 31.7917 31.7916C30.2917 33.2916 28.5278 34.4794 26.5 35.355C24.4722 36.2294 22.3055 36.6666 20 36.6666C17.6944 36.6666 15.5278 36.2294 13.5 35.355C11.4722 34.4794 9.70832 33.2916 8.20832 31.7916C6.70832 30.2916 5.5211 28.5277 4.64666 26.5C3.7711 24.4722 3.33332 22.3055 3.33332 20C3.33332 17.6944 3.7711 15.5277 4.64666 13.5C5.5211 11.4722 6.70832 9.70829 8.20832 8.20829C9.70832 6.70829 11.4722 5.52107 13.5 4.64663C15.5278 3.77107 17.6944 3.33329 20 3.33329ZM20 6.66663C16.3055 6.66663 13.1594 7.96496 10.5617 10.5616C7.96499 13.1594 6.66666 16.3055 6.66666 20C6.66666 23.6944 7.96499 26.8405 10.5617 29.4383C13.1594 32.035 16.3055 33.3333 20 33.3333C23.6944 33.3333 26.84 32.035 29.4367 29.4383C32.0344 26.8405 33.3333 23.6944 33.3333 20C33.3333 16.3055 32.0344 13.1594 29.4367 10.5616C26.84 7.96496 23.6944 6.66663 20 6.66663Z"
                  fill="#5699E8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderComponent;
