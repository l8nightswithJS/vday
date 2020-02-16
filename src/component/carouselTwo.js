import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import f1 from '../images/f1.jpg';
import f2 from '../images/f2.jpg';
import f3 from '../images/f3.jpg';
import lily1 from '../images/lily1.jpg';
import lily2 from '../images/lily2.jpg'
import lily4 from '../images/lily4.jpg'
import lily5 from '../images/lily5.jpg'
import lily6 from '../images/lily6.jpg'



export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={lily1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={lily2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={lily4}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={lily5}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={lily6}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={f1}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={f2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={f3}
            alt="Third slide"
          />
        </Carousel.Item>

      </Carousel>
    );
  }
  
 