import React, { useRef, useState } from 'react';
import './style.css';

const Plano = ({ number, title, subTitle, description, videoUrl, coverImage, invertido }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.controls = true;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="plano-par">
      <div className="plano-description">
        <div className="plano-number-container-mobile">
          Peça <span className="plano-number">{number}</span> de 7
        </div>
        <div className={`plano-infos ${invertido ? 'invertido' : ''}`}>
          <div className="plano-video">
            <div className="plano-video-border">
              <div className="video-wrapper">
                <video
                  ref={videoRef}
                  width="100%"
                  height="auto"
                  className="plano-video-element"
                  poster={coverImage}
                  controls={false}
                >
                  <source src={videoUrl} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>

                {!isPlaying && (
                  <button className="play-button" onClick={handlePlay}>
                    ▶
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="plano-text">
            <div className="plano-number-container-desktop">
              Peça <span className="plano-number">{number}</span> de 7
            </div>
            <h2 className="title-l plano-title">{title}</h2>
            <h3 className="plano-subtitle paragraph-xl">{subTitle}</h3>
            <p className="plano-description paragraph">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plano;
