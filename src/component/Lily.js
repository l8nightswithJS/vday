import React from 'react';
import ControlledCarousel from './carouselTwo.js';
import ControlledCarouselThree from './carousel3.js'


import {
    Link
  } from "react-router-dom";

const Lily = () => {
    return (
        <>
        <div className='lily' >
            <h1>Anna Lilia Garcia</h1>
           <h4>I could write a novel and still not have enough words to describe how amazing you are.</h4>
           <h2>Beautiful!!!</h2>
            <ControlledCarousel className='home-carousel'/>
            <br/>
            <ControlledCarouselThree className='home-carousel'/>
            <Link className='lilys-link' to='/home'>Back</Link>
            
        </div>

        </>
    )
}

export default Lily;