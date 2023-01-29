import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getImages } from '../app';
import { Container } from './App.styled';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Modal } from './Modal';
export const App = () => {
  // state = {
  //   page: 1,
  //   images: [],
  //   query: '',
  //   isLoading: false,
  //   showModal: false,
  //   showButton: false,
  //   selectedImage: null,
  // };

  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (query === '' || page === '') {
      return;
    }

    async function fetchImages() {
      try {
        setIsLoading(true);
        const images = await getImages(query, page);
        const updatedImages = images.hits;

        if (images.totalHits === 0) {
          return toast('Oops, there are no pictures with this name', {
            duration: 2000,
            style: { color: 'red' },
          });
        }

        setImages(prevState => [...prevState, ...updatedImages]);
        setShowButton(page < Math.ceil(images.totalHits / 12));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const makeOptions = () => {
    return images.map(({ id, webformatURL, largeImageURL }) => ({
      id,
      webformatURL,
      largeImageURL,
    }));
  };

  const handleInputSubmit = query => {
    setPage(1);
    setImages([]);
    setQuery(query);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const handleCLick = value => {
    setShowModal(prevState => !prevState);
    setSelectedImage(value);
  };

  const handleKeyDown = ({ code }) => {
    console.log(code);
    if (code === 'Escape') {
      return setShowModal(prevState => !prevState);
    }
  };

  return (
    <Container>
      <Searchbar isLoading={isLoading} onChange={handleInputSubmit} />
      <Toaster />
      <ImageGallery images={makeOptions} onShow={handleCLick} />
      {showModal && <Modal onKeyDown={handleKeyDown} url={selectedImage} />}
      {showButton && <Button onChange={loadMore} />}
    </Container>
  );
};
