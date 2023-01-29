import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay } from './Modal.styled';
import { OpenModal } from './Modal.styled';

export const Modal = ({ url, onKeyDown }) => {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  });

  return (
    <Overlay>
      <OpenModal>
        <img src={`${url}`} alt="" />
      </OpenModal>
    </Overlay>
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};
