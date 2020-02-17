import React from 'react';
import sunshine from '../songs/sunshine.mp3';
import {
    Link
  } from "react-router-dom";

const LandingPage = () => {
    const HandleAudio = () => {
        var song = new Audio(sunshine);
        song.play();
        console.log(song);
      }
    
    return (
        <>
            <div className='container'>
                <button onClick={HandleAudio}>Play</button>
                <div className='header'>
                    <h1>Welcome,</h1>                     
                </div>
                <h2 className='landing-h2'>Anna Lilia Garcia</h2>
            </div><br/><br/> 
            <Link className='landing-link' to='/home'>Enter</Link>
            
      </>
    )
}
export default LandingPage;