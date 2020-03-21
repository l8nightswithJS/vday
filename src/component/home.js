import React from 'react';
// import ControlledCarousel from './carousel'
// import lily3 from '../images/lily3.jpg';
import {
    Link
  } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className='home'>
            <h1><span>A</span>nna <span>L</span>ilia <span>G</span>arcia</h1>
            <h5 className='moontxt'><span>M</span>arch may <span>B</span>ring the <span>S</span>pring,<br/><br/><span>B</span>ut you <span>P</span>rovide,<br/><br/><span>T</span>he <span>S</span>unshine.</h5>
            {/* <ControlledCarousel className='home-carousel'/> */}
            <h2 className='home-happy'><span className='span'>H</span>appy <span className='span'>B</span>irthday!!!</h2>
            <h2 className='h2-center'><span className='span'>Y</span>ou <span className='span'>A</span>re,</h2>
            <div className='home-txt'>
                <h3 className='h3-left'><span className='span'>I</span>ntelligent</h3>
                <h3 className='h3-right'><span className='span'>B</span>eautiful</h3>
                <h3 className='h3-left'><span className='span'>C</span>aring</h3>
                <h3 className='h3-right'><span className='span'>A</span>mbitious</h3>
                <h3 className='h3-left'><span className='span'>A</span>mazing</h3>
                <h3 className='h3-right'><span className='span'>S</span>trong</h3>
            </div>
                <h2 className='h2-center-btm'><span className='span'>A</span>nd <span className='span'>M</span>uch <span className='span'>M</span>ore</h2>
            <div className='bnButtons'>
                <Link className='link' to='/'><span className='span'>H</span>ome</Link>
                {/* <Link className='link' to='/Lily'><span className='span'>N</span>ext</Link> */}
            </div>
            
        </div>

        </>
    )
}

export default Home;