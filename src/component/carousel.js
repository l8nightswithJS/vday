import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import quote1 from '../images/quote1.jpg';
import quote2 from '../images/quote2.jpg';
import quote3 from '../images/quote3.jpg';
import quote4 from '../images/quote4.jpg';
import quote5 from '../images/quote5.jpg';
import quote6 from '../images/quote6.jpg';
import quote7 from '../images/quote7.jpg';
import quote8 from '../images/quote8.jpg';
import quote9 from '../images/quote9.jpg';
import quote10 from '../images/quote10.jpg';




export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };

  
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval={false} className='carousel1'>
        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={quote1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={quote2}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={quote3}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={quote4}
            alt="Fourth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={quote5}
            alt="Fifth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={quote6}
            alt="Sixth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={quote7}
            alt="Seventh slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={quote8}
            alt="Eighth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={quote9}
            alt="Ninth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={quote10}
            alt="Tenth slide"
          />
        </Carousel.Item>
        
      </Carousel>
    );
  }
  
 