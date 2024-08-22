import React, { useState, useMemo } from 'react';
import './ThumbnailGallery.css';

const ThumbnailGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const thumbnails = useMemo(() => {
    return images.map((image, index) => (
      <img
        key={index}
        src={image.src}
        alt={image.alt}
        className={`thumbnail ${
          selectedImage.src === image.src ? 'active' : ''
        }`}
        onClick={() => setSelectedImage(image)}
      />
    ));
  }, [images, selectedImage]);

  return (
    <div className="image-gallery">
      <div className="selected-image">
        <img src={selectedImage.src} alt={selectedImage.alt} />
      </div>
      <div className="thumbnail-container">{thumbnails}</div>
    </div>
  );
};

export default ThumbnailGallery;
