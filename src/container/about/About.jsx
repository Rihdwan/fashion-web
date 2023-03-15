import React from 'react';
import './about.css';

function About() {
  return (
    <div className='fas__about'>
      <div className='fas__about-text'>
        <p className='joinShopping'>
        JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
        </p>
        <p className='typeYour'>
        Type your email down below and be young wild generation
        </p>
      </div>
      <div className='fas__about-form'>
        <form action="">
          <label htmlFor="">
            <input type="text" placeholder='Add your email here' value="" />
            <button>SEND</button>
          </label>
        </form>
      </div>
    </div>
  )
}

export default About