import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({ images, onShow }) => {
  return (
    <List>
      <ImageGalleryItem images={images} onShow={onShow} />
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
};
