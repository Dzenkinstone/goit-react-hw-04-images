import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay } from './Modal.styled';
import { OpenModal } from './Modal.styled';

export const Modal = ({ url, onKeyDown }) => {
  useEffect(() => {
    const checkKey = ({ code }) => {
      if (code === 'Escape') {
        return onKeyDown();
      }
    };

    window.addEventListener('keydown', checkKey);

    return () => window.removeEventListener('keydown', checkKey);
  }, [onKeyDown]);

  return (
    <Overlay
      onClick={event => {
        if (event.currentTarget === event.target) {
          return onKeyDown();
        }
      }}
    >
      <OpenModal>
        <img width="1000px" src={`${url}`} alt="" />
      </OpenModal>
    </Overlay>
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};
