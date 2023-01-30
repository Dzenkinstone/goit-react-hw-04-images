import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay } from './Modal.styled';
import { OpenModal } from './Modal.styled';

export const Modal = ({ url, onKeyDown, handleClick }) => {
  useEffect(() => {
    const checkKey = ({ code }) => {
      if (code === 'Escape') {
        return onKeyDown();
      }
      handleClick();
    };

    window.addEventListener('keydown', checkKey);

    return () => window.removeEventListener('keydown', checkKey);
  }, [onKeyDown, handleClick]);

  return (
    <Overlay onClick={handleClick}>
      <OpenModal>
        <img width="1000px" src={`${url}`} alt="" />
      </OpenModal>
    </Overlay>
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
