import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './ScrollGallery.css';

const fetchImages = (start, count) => {
  return Array.from(
    { length: count },
    (_, i) => `https://picsum.photos/id/${start + i}/300/300`,
  );
};

const LazyImage = ({ src }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // carregar a imagem apenas quando estiver visível
  });

  return (
    <div className="scroll-gallery__item">
      <img
        ref={ref}
        src={inView ? src : ''}
        alt="imagem"
        className="scroll-gallery__image"
      />
    </div>
  );
};

const ScrollGallery = () => {
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const initialImages = fetchImages(1, 9);
    setImages(initialImages);
  }, []);

  const loadMoreImages = () => {
    if (images.length >= 100) {
      setHasMore(false);
      return;
    }
    const newImages = fetchImages(images.length + 1, 9);
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMoreImages();
      }
    };

    if (hasMore) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [images, hasMore]);

  return (
    <div className="scroll-gallery">
      {images.map((src, index) => (
        <LazyImage key={index} src={src} />
      ))}
    </div>
  );
};

export default ScrollGallery;
