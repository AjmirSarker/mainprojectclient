import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


import './HomeSlider.css';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

const HomeSlider = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet'
        }}
        navigation={true}
        // modules={[Pagination,Navigation, Autoplay]}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <div className="card bg-secondary  border-0 h-100 shadow-lg">
            <div class="card-footer bg-success d-flex ">
              <div className="MarginLeeft">
                <p>Arafat</p>
              </div>
              <div>
                <p>Sarker</p>
              </div>
            </div>
            <img
              src="https://i.ibb.co/GRJh5Yj/Golden-Field-1091-B-Mid-Tower-Gaming-Casing-1.png"
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body ">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sliderHeight">Slide 2</SwiperSlide>
        <SwiperSlide className="sliderHeight">Slide 3</SwiperSlide>
        <SwiperSlide className="sliderHeight">Slide 4</SwiperSlide>
        <SwiperSlide className="sliderHeight">Slide 5</SwiperSlide>
        <SwiperSlide className="sliderHeight">Slide 6</SwiperSlide>
        <SwiperSlide className="sliderHeight">Slide 7</SwiperSlide>
        <SwiperSlide className="sliderHeight">Slide 8</SwiperSlide>
        <SwiperSlide className="sliderHeight">Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
