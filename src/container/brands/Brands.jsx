import React from 'react';
import './brands.css';
import { hm, obey, shopify, lacoste, levis, amazon} from './import';

function Brands() {
  return (
    <div className='fas__brand'>
      <div className='fas__brand-container'>
        <div>
          <img src={hm} alt="H and M" />
        </div>
        <div>
          <img src={obey} alt="Obey" />
        </div>
        <div>
          <img src={shopify} alt="Shopify" />
        </div>
        <div>
          <img src={lacoste} alt="Lacoste" />
        </div>
        <div>
          <img src={levis} alt="Levis" />
        </div>
        <div>
          <img src={amazon} alt="Amazon" />
        </div>
      </div>
    </div>
  )
}

export default Brands