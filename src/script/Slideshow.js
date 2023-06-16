import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Slide1Image from '../images/Capture.png';
import Slide2Image from '../images/Capture2.png';
import Slide3Image from '../images/Capture3.png';
import Slide4Image from '../images/Capture1.png';
import Slide5Image from '../images/Capture4.png';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideshowInterval, setSlideshowInterval] = useState(null);

  const images = useMemo(
    () => [Slide1Image, Slide2Image, Slide3Image, Slide4Image, Slide5Image],
    []
  );

  const updateSlideshow = useCallback((direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex;

      if (direction === 'prev') {
        newIndex = (prevIndex - 1 + images.length) % images.length;
      } else {
        newIndex = (prevIndex + 1) % images.length;
      }

      return newIndex;
    });
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateSlideshow('next');
    }, 3000);

    setSlideshowInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [updateSlideshow]);

  const handleMouseEnter = () => {
    clearInterval(slideshowInterval);
  };

  const handleMouseLeave = () => {
    const interval = setInterval(() => {
      updateSlideshow('next');
    }, 5000);

    setSlideshowInterval(interval);
  };

  const handlePrevButtonClick = () => {
    updateSlideshow('prev');
  };

  const handleNextButtonClick = () => {
    updateSlideshow('next');
  };

  return (
    <section id="slideshow" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Slideshow"
          className={index === currentIndex ? 'active' : ''}
        />
      ))}
      <button id="prev-button" onClick={handlePrevButtonClick}>
        &lt;
      </button>
      <button id="next-button" onClick={handleNextButtonClick}>
        &gt;
      </button>
    </section>
  );
};

export default Slideshow;
