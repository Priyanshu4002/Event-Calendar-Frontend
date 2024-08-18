import React from 'react';
import './modal.css'; // Optional: For styling the modal

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {
          onClose && (
            <button className="modal-close" onClick={onClose}>X</button>
          )
        }
        {children}
      </div>
    </div>
  );
};

export default Modal;
