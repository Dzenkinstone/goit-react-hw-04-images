import PropTypes from 'prop-types';
import { Container } from './Button.styled';
import { LoadMoreButton } from './Button.styled';

export const Button = ({ onChange }) => {
  return (
    <Container>
      <LoadMoreButton onClick={() => onChange()}>Load more</LoadMoreButton>
    </Container>
  );
};

Button.propTypes = {
  onChange: PropTypes.func.isRequired,
};
