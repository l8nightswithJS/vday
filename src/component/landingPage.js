import React from 'react';
import {
    Link
  } from "react-router-dom";

const LandingPage = () => {
    
    
    return (
        <>
            <div className='container'>
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