import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import './index.css';

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hovering, setHovering] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex !== 0) {
      setRating(currentIndex); // Update rating only when currentIndex changes and it's not 0
    }
  }, [currentIndex]); // Set currentIndex as a dependency

  function handleClick(currentIndex) {
    setRating(0);
    setCurrentIndex(currentIndex); // Update currentIndex when a star is clicked
  }

  function handleMouseMove(currentIndex) {
    setHovering(currentIndex);
  }

  function handleMouseLeave() {
    setHovering(0);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <FaStar
            key={starIndex}
            onClick={() => handleClick(starIndex)}
            onMouseMove={() => handleMouseMove(starIndex)}
            onMouseLeave={handleMouseLeave}
            size={40}
            className={
              starIndex <= rating
                ? 'rated'
                : starIndex <= hovering
                  ? 'hovered'
                  : ''
            }
          />
        );
      })}
    </div>
  );
}
