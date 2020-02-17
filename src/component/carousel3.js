import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import lilymsg from '../images/lilymsg.jpg';
import lilymsg2 from '../images/lilymsg2.jpg';
import lilymsg3 from '../images/lilymsg3.jpg';




export default function ControlledCarouselThree() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} className='lilyscarouseltwo' interval={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={lilymsg}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={lilymsg2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-2"
            src={lilymsg3}
            alt="Second slide"
          />
        </Carousel.Item>

      </Carousel>
    );
  }
  
 