import React, { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const SliderStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
  };

  const SlideStyle = {
    backgroundImage: `${slides[currentIndex].url}`,
    boxShadow: "2px 2px 25px black",
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const leftArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
    scale: "1.5",
    userSelect: "none",
  };

  const rightArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
    scale: "1.5",
    userSelect: "none",
  };

  const gotoPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log(currentIndex);
  };

  const gotoNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log(currentIndex);
  };

  const dotsContinerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const dotsStyle = {
    margin: "0 5px",
    cursor: "pointer",
    fontSize: "20px",
    userSelect: "none",
    color : "#f0ffa3"
  };

  const gotoSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div style={SliderStyle}>
      <div style={leftArrowStyle} onClick={gotoPrevious}>
        &lt;
      </div>
      <div style={SlideStyle} className="image-slider"></div>
      <div style={rightArrowStyle} onClick={gotoNext}>
        &gt;
      </div>
      <div style={dotsContinerStyle}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotsStyle}
            onClick={() => gotoSlide(slideIndex)}
          >
            &#11044;
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
