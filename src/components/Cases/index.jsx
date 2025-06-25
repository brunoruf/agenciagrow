import React from 'react';
import './style.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CaseProject from '../CaseProject';

const Cases = () => {
  return (
    <div id="cases" className="container">
      <h2 className="title-xl gradient">Cases de Sucesso</h2>

      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        direction="horizontal"
        loop={false}

        navigation={true}
        scrollbar={{ draggable: true }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='custom-slide'><CaseProject title="Ddwadwai" videoUrl={'src/assets/videos/peca1.mp4'} /></SwiperSlide>
        <SwiperSlide className='custom-slide'>Slide 2</SwiperSlide>
        <SwiperSlide className='custom-slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='custom-slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='custom-slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='custom-slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='custom-slide'>Slide 3</SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Cases;
