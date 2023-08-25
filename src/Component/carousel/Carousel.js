import React, { useState, useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { CarouselImage } from "../assent/constant";
import "./carousel.css";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ImageSlider = useRef(null);

  const HandlePrev = () => {
    setCurrentIndex((prevState) => {
      return prevState === 0 ? CarouselImage.length - 1 : prevState - 1;
    });
    console.log(currentIndex);
  };
  const HandleNext = () => {
    setCurrentIndex((prevState) => {
      return prevState === CarouselImage.length - 1 ? 0 : prevState + 1;
    });
    console.log(currentIndex);
  };

    const sliderValue = -currentIndex * 100;
    console.log(sliderValue)

//   ImageSlider.current.style.transform = `translate(${sliderValue}%)`;

  return (
    <div className={`carousel-container`}>
      {CarouselImage.map((image, index) => {
        return (
          <img
            src={image}
            alt="imge"
            ref={ImageSlider}
            key={index}
            style={
              { transform: `translate(${sliderValue}%)`
            }}
          />
        );
      })}
      <span className="carousel-prev carousel-icon" onClick={HandlePrev}>
        <FaChevronLeft />
      </span>
      <span className="carousel-next carousel-icon" onClick={HandleNext}>
        <FaChevronRight />
      </span>
    </div>
  );
}

export default Carousel;
