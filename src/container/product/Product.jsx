import React from 'react';
import './product.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dataProduct } from './data';


function Product() {
  const settings = {
    dots: true,
    arrows:true,
    infinite: true,
    centerMode: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className='fas__product-container'>
      <p className='newArrivals'>NEW ARRIVALS</p>
      <Slider {...settings}>
        {dataProduct.map((item) => (
          <div>
            <div className='fas__product-card'>
              <div className='fas__product-card-img'><a href="buy"><img key={item.id} src={item.linkImg} /></a></div>
              <div>
                <div className='fas__product-card-title'>{item.title}</div>
                <p className='explore'>Explore Now!</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Product