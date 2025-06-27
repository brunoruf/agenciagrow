import React, { useRef, useState } from 'react';
import Modal from '../Modal';
import './style.css';

const CaseModal = ({ onClose, title, videoUrl, description, coverImage }) => {
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
    <Modal onClose={onClose}>
      <video
        ref={videoRef}
        width="100%"
        height="auto"
        className="modal-video"
        poster={coverImage}
        controls={false}
        src={videoUrl}
      />
      {!isPlaying && (
        <button className="modal-play-button" onClick={handlePlay}>
          ▶
        </button>
      )}
      <h2 className="title modal-case-title">{title}</h2>
      {description && <p className="paragraph-sm modal-case-description">{description}</p>}
    </Modal>
  );
};

export default CaseModal;
