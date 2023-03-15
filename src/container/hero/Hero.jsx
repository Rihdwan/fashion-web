import React from 'react';
import './hero.css';
import hero from '../../assets/hero.png';

function Hero() {
  return (
    <div>
      <div className='fas__hero'>
        <div className='fas__hero-content'>
          <h1><span className='fes__hero-content_h1-lets'>LET'S</span>
            <br />
            EXPLORE
            <br />
            <span className='fes__hero-content_h1-unique'>UNIQUE </span>
            <br />
            CLOTHES.
          </h1>
          <p>Live for Influential and Innovative fashion!</p>
          <div className='fas__hero-shop-now'>
            <button>Shop Now</button>
          </div>
        </div>
        <div className='fas__hero-image'>
          <img src={hero} alt="header" />
        </div>
      </div>
    </div>
  )
}

export default Hero