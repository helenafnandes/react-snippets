import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './index.css';

export default function StarRating(noOfStars = 5) {
  const [rating, setRating] = useState(0);
  const [hovering, setHovering] = useState(0);

  function handleClick(currentIndex) {
    setRating(currentIndex);
  }

  function handleMouseMove(currentIndex) {
    setHovering(currentIndex);
  }

  function handleMouseLeave() {
    setHovering(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
            className={index <= (hovering || rating) ? 'active' : 'inactive'}
          />
        );
      })}
    </div>
  );
}
