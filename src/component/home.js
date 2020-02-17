import React from 'react';
import ControlledCarousel from './carousel'
import lily3 from '../images/lily3.jpg';
import {
    Link
  } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className='home'>
            <h1>Anna Lilia Garcia</h1>
            <h5 className='moontxt'>You are the light to my darkness,<br/><br/> you will always shine brighter than the moon.</h5>
            <div className='home-img'>
                <img className='img-home' src={lily3} alt='lily1'/>
            </div>
            <ControlledCarousel className='home-carousel'/>
            <div className='bnButtons'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/Lily'>Next</Link>
            </div>
            
        </div>

        </>
    )
}

export default Home;