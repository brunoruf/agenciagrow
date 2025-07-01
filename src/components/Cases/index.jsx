// src/components/Cases.jsx
import React, { useState } from 'react';
import './style.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CaseProject from '../CaseProject';
import CaseModal from '../CaseModal';

const Cases = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [modalData, setModalData] = useState({});

  const abrirModal = (dados) => {
    setModalData(dados);
    setModalAberto(true);
  };

  const cases = [
    {
      title: 'The Bridge Brasil',
      embedId: '6iM7B90VC9A',
      description: '',
      backgroundImage: '/images/cases-images/cover-thebridge.jpg',
    },
    {
      title: 'Casamento às Cegas',
      embedId: 'GiPXscUkTXo',
      description: '',
      backgroundImage: '/images/cases-images/cover-casamento.jpg',
    },
    {
      title: 'Ilhados com a Sogra',
      embedId: 'fOy2YphyXXk',
      description: '',
      backgroundImage: '/images/cases-images/cover-ilhados.jpg',
    },
    {
      title: 'Masterchef Brasil',
      embedId: 'ESRsGLE0Fac',
      description: '',
      backgroundImage: '/images/cases-images/cover-masterchef.jpg',
    },
    {
      title: 'Nova Cena',
      embedId: 'l71txqn2-9U',
      description: '',
      backgroundImage: '/images/cases-images/cover-novacena.jpg',
    },
    {
      title: 'Luva de Pedreiro: O Rei da Jogada',
      embedId: 'TDi4yirmR00',
      description: '',
      backgroundImage: '/images/cases-images/cover-luvadepedreiro.jpg',
    },
    {
      title: 'Quilos Mortais Brasil',
      embedId: 'vSDhrsczk5I',
      description: '',
      backgroundImage: '/images/cases-images/cover-quilosmortais.jpg',
    },
    {
      title: 'Iron Chef',
      embedId: 'cTCPgwfdn08',
      description: '',
      backgroundImage: '/images/cases-images/cover-ironchef.jpg',
    },
    {
      title: 'No Limite Amazônia',
      embedId: 'ju8_B754YKY',
      description: '',
      backgroundImage: '/images/cases-images/cover-nolimite.jpg',
    },
    {
      title: 'Minha Mãe Com Seu Pai',
      embedId: 'dbKYeRCVRnw',
      description: '',
      backgroundImage: '/images/cases-images/cover-minhamae.jpg',
    },
    {
      title: 'Pesadelo na Cozinha',
      embedId: 'xhB9UKyMO98',
      description: '',
      backgroundImage: '/images/cases-images/cover-pesadelonacozinha.jpg',
    },
    {
      title: 'The Masked Singer Brasil',
      embedId: '9nCLqTZ5H7w',
      description: '',
      backgroundImage: '/images/cases-images/cover-maskedsinger.jpg',
    },
    {
      title: 'Muquiranas',
      embedId: 'iTVr6IxccSU',
      description: '',
      backgroundImage: '/images/cases-images/cover-muquiranas.jpg',
    },
    {
      title: 'Desapegue se for Capaz',
      embedId: 'rX02m_m-ugA',
      description: '',
      backgroundImage: '/images/cases-images/cover-desapegue.jpg',
    },
    
  ];

  return (
    <div id="cases" className="cases-container container">
      <h2 className="title-xl cases-title">
        <span className="gradient">Cases de Sucesso</span>
      </h2>

      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        navigation
        scrollbar={{ draggable: true }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {cases.map((item, idx) => (
          <SwiperSlide className="custom-slide" key={idx}>
            <CaseProject
              title={item.title}
              onClick={() => abrirModal(item)}
              backgroundImage={item.backgroundImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {modalAberto && (
        <CaseModal
          onClose={() => setModalAberto(false)}
          title={modalData.title}
          description={modalData.description}
          embedId={modalData.embedId}
        />
      )}
    </div>
  );
};

export default Cases;
