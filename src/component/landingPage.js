import React, { useState } from 'react';
import sunshine from '../songs/bday.mp3';
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
                <div className='buttonL' onClick={HandlePlay}><span>P</span>lay</div>
                
                <div className='header'>
                    <h1><span>H</span>appy <span>B</span>irthday,</h1>                     
                </div>
                <h2 className='landing-h2'><span>A</span>nna <span>L</span>ilia <span>G</span>arcia</h2>
                <h2 className='landing-dob'>0<span>3</span>/2<span>1</span>/1<span>9</span>8<span>9</span></h2>
            </div>
            <Link className='landing-link' to='/home'><span>E</span>n<span>t</span>e<span>r</span></Link>
            
      </>
    )
}
export default LandingPage;