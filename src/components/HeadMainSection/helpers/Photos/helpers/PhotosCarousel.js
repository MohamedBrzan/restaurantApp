import React, { Component, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import photos1 from '../../../../../images/items/Photos/photos1.jpg';
import photos2 from '../../../../../images/items/Photos/photos2.jpg';
import photos3 from '../../../../../images/items/Photos/photos3.jpg';
import photos4 from '../../../../../images/items/Photos/photos4.jpg';
import photos5 from '../../../../../images/items/Photos/photos5.jpg';
import photos6 from '../../../../../images/items/Photos/photos6.jpg';
import photos7 from '../../../../../images/items/Photos/photos7.jpg';
import photos8 from '../../../../../images/items/Photos/photos8.jpg';
import photos9 from '../../../../../images/items/Photos/photos9.jpg';
import photos10 from '../../../../../images/items/Photos/photos10.jpg';
import photos11 from '../../../../../images/items/Photos/photos11.jpg';
import photos12 from '../../../../../images/items/Photos/photos12.jpg';
import photos13 from '../../../../../images/items/Photos/photos13.jpg';
import photos14 from '../../../../../images/items/Photos/photos14.jpg';
import photos15 from '../../../../../images/items/Photos/photos15.jpg';
import photos16 from '../../../../../images/items/Photos/photos16.jpg';
import photos17 from '../../../../../images/items/Photos/photos17.jpg';
import photos18 from '../../../../../images/items/Photos/photos18.jpg';
import photos19 from '../../../../../images/items/Photos/photos19.jpg';
import photos20 from '../../../../../images/items/Photos/photos20.jpg';
import photos21 from '../../../../../images/items/Photos/photos21.jpg';
import photos22 from '../../../../../images/items/Photos/photos22.jpg';
import photos23 from '../../../../../images/items/Photos/photos23.jpg';
import photos24 from '../../../../../images/items/Photos/photos24.jpg';
import photos25 from '../../../../../images/items/Photos/photos25.jpg';
import photos26 from '../../../../../images/items/Photos/photos26.jpg';
import photos27 from '../../../../../images/items/Photos/photos27.jpg';
import photos28 from '../../../../../images/items/Photos/photos28.jpeg';
import photos29 from '../../../../../images/items/Photos/photos29.jpeg';
import './PhotosCarousel.css';

const data = [
  photos1,
  photos2,
  photos3,
  photos4,
  photos5,
  photos6,
  photos7,
  photos8,
  photos9,
  photos10,
  photos11,
  photos12,
  photos13,
  photos14,
  photos15,
  photos16,
  photos17,
  photos18,
  photos19,
  photos20,
  photos21,
  photos22,
  photos23,
  photos24,
  photos25,
  photos26,
  photos27,
  photos28,
  photos29,
];

export default function PhotosCarousel() {
  const carouselSection = useRef();
  return (
    <section className='carousel-section d-none' ref={carouselSection}>
      <Carousel>
        {data.map((item, index) => (
          <img src={item} alt={index} className='w-100' key={index} />
        ))}
      </Carousel>
      <div
        className='carousel-modal'
        onClick={() => carouselSection.current.classList.add('d-none')}
      ></div>
    </section>
  );
}
