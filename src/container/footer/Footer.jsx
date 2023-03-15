import React from 'react';
import './footer.css';
import {footer_Company, footer_QuickLink, footer_Legal} from './data.js';

function Footer() {
  return (
    <div className='fas__footer'>
      <div className='fas__footer-brand'>
        <p className='fashion'>FASHION</p>
        <p className='complete'>Complete your style with awesome clothes from us.</p>
      </div>
      <div className='fas__footer-links'>
        <div>
          <p>Company</p>
          {footer_Company.map((item) => (
            <a href="">{item.text}</a>
          ))}
        </div>
        <div>
          <p>Quic Link</p>
          {footer_QuickLink.map((item) => (
            <a href="">{item.text}</a>
          ))}
        </div>
        <div>
          <p>Legal</p>
          {footer_Legal.map((item) => (
            <a href="">{item.text}</a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer