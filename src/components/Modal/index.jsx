import React from 'react';
import './style.css';

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className='modal-close'>X</button>
      </div>
    </div>
  );
};

export default Modal;
