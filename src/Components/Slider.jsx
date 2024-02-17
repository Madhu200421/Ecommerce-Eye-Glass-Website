import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';

const Banner = () => {
  return (
    <div className="slider-container">
      <Carousel interval={3000} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 img-mobile-height"
            src={require('./slider1.jpeg')}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-mobile-height"
            src={require('./slider2.jpeg')}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-mobile-height"
            src={require('./slider33.jpeg')}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-mobile-height"
            src={require('./slider4.jpeg')}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;