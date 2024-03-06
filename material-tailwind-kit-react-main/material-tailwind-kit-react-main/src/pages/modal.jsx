import React from 'react';

const Modal = ({ children, cerrarModal }) => {

  return (
    <div className="modal">
      <div className="modal-contenido">
        {children}
        <button onClick={cerrarModal} className="modal-cerrar">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
