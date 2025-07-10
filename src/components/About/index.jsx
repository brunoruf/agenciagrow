import React, { useState } from 'react';
import './style.css';

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div id="about" className='container about-container'>
      <h2 className='title-xl'><span className='gradient'>Sobre a Grow</span></h2>
      <div className='about-content-container'>
        <div className='video-about-container'>
          <div className='video-about'>
            {!showVideo ? (
              <div className="video-cover" onClick={() => setShowVideo(true)}>
                <img src="/images/cover-shorts.jpg" alt="Capa do vídeo" />
                <div className="play-button-about">▶</div>
              </div>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Gcyyp5ogrSA?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        <div className='about-text'>
          <p className='paragraph-md'>Somos um <strong>ecossistema de soluções criativas, tecnológicas e estratégicas</strong> para marcas que querem crescer, se destacar e se conectar de verdade com seu público.</p>
          <p className='paragraph-md'>Acreditamos no poder das <strong>histórias bem contadas</strong>, das ideias criativas e inteligentes e da valorização da personalidade. Por isso, desenvolvemos campanhas que <strong>emocionam, engajam e geram resultados reais</strong>, dentro e fora das redes.</p>
          <p className='paragraph-md'>Nosso diferencial? Uma <strong>visão 360°</strong> que considera o público externo, a cultura interna da empresa e o futuro do seu setor. Ao se conectar ao nosso <strong>HUB criativo</strong>, você não apenas amplia sua comunicação, mas anexa à sua empresa um setor completo de soluções. Soluções criativas que vão além do marketing tradicional envolvendo tecnologia, inteligência artificial e inovação contínua.</p>
          <p className="paragraph-md">Aqui, sua marca acompanha o ritmo das transformações do mundo.</p>
          <p className="paragraph-md">Seja bem-vindo à <strong>Grow Creative Hub.</strong></p>
        </div>
      </div>
    </div>
  );
};

export default About;
