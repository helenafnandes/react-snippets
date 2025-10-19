import { useEffect, useState } from 'react';

export default function ImageSlider({ url, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fallback images from different public APIs
  const fallbackImages = [
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2', 
    'https://picsum.photos/400/300?random=3',
    'https://picsum.photos/400/300?random=4',
    'https://picsum.photos/400/300?random=5',
    'https://picsum.photos/400/300?random=6',
    'https://picsum.photos/400/300?random=7',
    'https://picsum.photos/400/300?random=8',
    'https://picsum.photos/400/300?random=9',
    'https://picsum.photos/400/300?random=10'
  ];

  async function fetchData(url) {
    try {
      setLoading(true);
      setErrorMsg(null);
      
      // Try the original API first
      const response = await fetch(`${url}?page=1&limit=${limit}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      // Check if data has the expected structure
      if (Array.isArray(data) && data.length > 0 && data[0].url) {
        setImages(data);
        setLoading(false);
        return data;
      } else {
        throw new Error('Invalid data structure');
      }
    } catch (error) {
      console.warn('API failed, using fallback images:', error.message);
      
      // Use fallback images directly from Picsum
      const fallbackData = fallbackImages.map((url, index) => ({
        id: index + 1,
        url: url,
        author: `Picsum Image ${index + 1}`
      }));
      
      setImages(fallbackData);
      setLoading(false);
      return fallbackData;
    }
  }

  async function getImageData() {
    // Always use Picsum images for reliability
    const picsumData = fallbackImages.map((url, index) => ({
      id: index + 1,
      url: url,
      author: `Picsum Image ${index + 1}`
    }));
    setImages(picsumData);
    
    // Optionally try the original API as well
    if (url && url !== '') {
      try {
        await fetchData(url);
      } catch (error) {
        console.warn('Original API failed, keeping Picsum images');
      }
    }
  }

  useEffect(() => {
    getImageData();
  }, [url]);

  const handleError = (index) => {
    console.warn(`Failed to load image at index ${index}`);
    
    // Remove the failed image from the array
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    
    // Adjust current index if necessary
    if (index === currentIndex && updatedImages.length > 0) {
      setCurrentIndex(Math.min(index, updatedImages.length - 1));
    } else if (index < currentIndex) {
      setCurrentIndex(currentIndex - 1);
    }
    
    // If no images left, try to get more fallback images
    if (updatedImages.length === 0) {
      const moreFallbackImages = fallbackImages.map((url, i) => ({
        id: i + 100,
        url: url,
        author: `Fallback Image ${i + 1}`
      }));
      setImages(moreFallbackImages);
      setCurrentIndex(0);
    }
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading images...</div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="container">
        <div className="error">No images available</div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="slider">
        <button className="nav-btn prev" onClick={prevImage} disabled={images.length <= 1}>
          ←
        </button>
        
        <div className="image-container">
          <img 
            src={images[currentIndex].url} 
            alt={`Slide ${currentIndex + 1}`}
            onError={() => handleError(currentIndex)}
          />
          <div className="image-info">
            <p>Image {currentIndex + 1} of {images.length}</p>
            {images[currentIndex].author && (
              <p className="author">by {images[currentIndex].author}</p>
            )}
          </div>
        </div>
        
        <button className="nav-btn next" onClick={nextImage} disabled={images.length <= 1}>
          →
        </button>
      </div>
      
      {images.length > 1 && (
        <div className="dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
