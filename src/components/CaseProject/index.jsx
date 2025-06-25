import React, { useRef, useState } from 'react';


const CaseProject = ({coverImage, videoUrl, title}) => {

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
    <section className='case-project-container'>
        <div className='single-case-image'>
                <video
                    ref={videoRef}
                    width="100%"
                    height="auto"
                    className="plano-video-element"
                    poster={coverImage}
                    controls={false} // começa sem os controles
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
        <h3 className='paragraph-xl'>{title}</h3>
    </section>
  )
}

export default CaseProject