import React from 'react';
import './discount.css';

function Discount() {
  return (
    <div className='fas__discount'>
      <div className='fas__discount-img'><img src="https://drive.google.com/uc?export=view&id=1Ku2Ub6I5wI5m2oETtpfdkHF87ucUK-9H" alt="discount" /></div>

      <div className='fas__discount-content'>
        <h1><span>PAYDAY</span> 
          <br /> 
          SALE NOW
        </h1>

        <p>Spend minimal $100 get 30% off voucher code for your next purchase</p>
        <p><b>1 June - 10 June 2021</b>
          <br />
          <span className='termsCondition'>*Terms & Conditions apply</span>
        </p>
        <button>SHOP NOW</button>
      </div>
    </div>
  )
}

export default Discount