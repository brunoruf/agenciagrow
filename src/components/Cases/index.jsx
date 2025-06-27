import React, { useState } from 'react';
import './style.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CaseProject from '../CaseProject';
import CaseModal from '../CaseModal'; // novo componente de modal

const Cases = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [modalData, setModalData] = useState({});

  const abrirModal = (dados) => {
    setModalData(dados);
    setModalAberto(true);
  };

  const cases = [
    {
      title: 'Masterchef Brasil',
      videoUrl: '/videos/peca1-web.mp4',
      description: 'Descrição do Case A.',
      backgroundImage:'/images/cases-images/cover-masterchef.webp',
    },
    {
      title: 'Case B',
      videoUrl: '/videos/peca2-web.mp4',
      description: 'Descrição do Case B.',
    },
    {
      title: 'Case C',
      videoUrl: '/videos/peca3-web.mp4',
      description: 'Descrição do Case C.',
    },    {
      title: 'Case D',
      videoUrl: '/videos/peca3-web.mp4',
      description: 'Descrição do Case C.',
    },    {
      title: 'Case E',
      videoUrl: '/videos/peca3-web.mp4',
      description: 'Descrição do Case C.',
    },    {
      title: 'Case F',
      videoUrl: '/videos/peca3-web.mp4',
      description: 'Descrição do Case C.',
    },
  ];

  return (
    <div id="cases" className='cases-container'>
      <h2 className="title-xl gradient cases-title">Cases de Sucesso</h2>

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
        {cases.map((item, index) => (
          <SwiperSlide className="custom-slide" key={index}>
            <CaseProject
              title={item.title}
              videoUrl={item.videoUrl}
              onClick={() => abrirModal(item)}
              backgroundImage={item.backgroundImage || '/images/cases-images/cover-default.jpg'}
            />
          </SwiperSlide>
        ))}
      </Swiper>

{modalAberto && (
  <CaseModal
    onClose={() => setModalAberto(false)}
    title={modalData.title}
    videoUrl={modalData.videoUrl}
    description={modalData.description}
  />
)}

    </div>
  );
};

export default Cases;
