import { useEffect, useState } from 'react';

export default function ImageSlider({ url, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchData(url) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=1&limit=${limit}`);
      if (!response.ok) {
        setErrorMsg('Network response was not ok');
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setLoading(false);
      return data;
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
      return null;
    }
  }

  async function getImageData() {
    const imageData = await fetchData(url);
    if (imageData) {
      setImages(imageData);
    }
  }

  useEffect(() => {
    if (url !== '') getImageData();
  }, [url]);

  const handleError = () => {
    setErrorMsg('Failed to load image');
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (errorMsg !== null) {
    return <div className="container">Error: {errorMsg}</div>;
  }

  return (
    <div className="container">
      {images.length > 0 ? (
        <img src={images[0].url} alt="First slide" onError={handleError} />
      ) : (
        <div>No images available</div>
      )}
    </div>
  );
}
