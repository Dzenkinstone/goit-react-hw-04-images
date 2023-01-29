import PropTypes from 'prop-types';
import { Item } from './ImageGalleryItem.styled';
import { Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, onShow }) => {
  const responce = images();
  return (
    <>
      {responce.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <Item onClick={event => onShow(largeImageURL)} key={id}>
            <Image src={webformatURL} alt="" />
          </Item>
        );
      })}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
};
