import React from 'react';
import './fav.css';

function Fav() {
  return (
    <div>
      <div className='fas__fav'>
        <div className='fas__fav-text'>
          <p className='young'>Young's Favourite</p>
        </div>
        <div className='fas__fav-content'>
          <div className='fas__fav-content_trending'>
            <img src="https://drive.google.com/uc?export=view&id=1kYApA7Tpc1q51Ua2j7uZZFpq2kGRBBub" alt="" />
            <div>
              <p className='fas__fav-content_trending-title'>Trending on instagram</p>
              <p className='explore'>Explore Now!</p>
            </div>
          </div>
          <div className='fas__fav-content_all-under'>
            <img src="https://drive.google.com/uc?export=view&id=17Iau9kaQyV4SDlnqgcdE-oPkzTU3aWtm" alt="" />
            <div>
              <p className='fas__fav-content_all-under-title'>All Under $40</p>
              <p className='explore'>Explore Now!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fav