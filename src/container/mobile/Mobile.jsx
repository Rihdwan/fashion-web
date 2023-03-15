import React from 'react';
import './mobile.css';


function Mobile() {
  return (
    <div className='fas__mobile'>
      <div className='fas__mobile-content'>
        <p className='downloadApp'>DOWNLOAD APP & GET THE VOUCHER!</p>
        <p>Get 30% off for first transaction using Rondovision mobile app for now.</p>
        <div className='downloadButton'>
          <a href="">
            <img src="https://drive.google.com/uc?export=view&id=1cXh96MhG30lfZw0kPWPe-G_jvpKIIBFL" alt="" />
          </a>
          <a href="">
            <img src="https://drive.google.com/uc?export=view&id=1ePCSi4Qb8T-KxoUdBXCaI6krEw2RC3_f" alt="" />
          </a>
        </div>
      </div>
      <div className='fas__mobile-img'>
        <img src="https://drive.google.com/uc?export=view&id=1NwLtZRc9aKClUaJ7H1iHV3rdovv5GmFT" alt="" />
      </div>
    </div>
  )
}

export default Mobile