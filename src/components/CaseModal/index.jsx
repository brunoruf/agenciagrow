import React from 'react';
import Modal from '../Modal';
import './style.css';

const CaseModal = ({ onClose, title, description, embedId }) => {
  // monta a URL de embed do YouTube a partir do ID
  const src = `https://www.youtube.com/embed/${embedId}?autoplay=1&rel=0`;

  return (
    <Modal onClose={onClose}>
      <div className="modal-video-wrapper">
        <iframe
          width="100%"
          height="100%"
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <h2 className="title modal-case-title">{title}</h2>
      {description && (
        <p className="paragraph-sm modal-case-description">{description}</p>
      )}
    </Modal>
  );
};

export default CaseModal;
