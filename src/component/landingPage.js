import React, { useState } from 'react';
import sunshine from '../songs/sunshinetwo.mp3';
import {
    Link
  } from "react-router-dom";

const LandingPage = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  console.log(isPlaying);
  var song = new Audio(sunshine);
  console.log(song.ended);
  
    const HandlePlay = () => {
      if(isPlaying === false) {
        song.play();
        song.controls = true;
        console.log(song);
        setIsPlaying(true);
      } else console.log('err');  
    }

    
    
    return (
        <>
            <div className='container'>
                <div className='buttonL' onClick={HandlePlay}>Play</div>
                
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