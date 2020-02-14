import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import quote3 from '../images/quote3.jpg';
import quote2 from '../images/quote2.jpg';
import quote1 from '../images/quote1.jpg';



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
            src={quote1}
            alt="First slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={quote2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={quote3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
 