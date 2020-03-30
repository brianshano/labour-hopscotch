import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
// import ImageMapper from 'react-image-mapper';

const SwiperPanel = () => {
  const params = {
    // slidesPerView: 6,
    spaceBetween: 20,
    slidesPerView: 'auto',
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    mousewheel: {
      invert: true
    },
    hashNavigation: {
      replaceState: true
    },
    centeredSlides: true,
    grabCursor: true
  };
  return (
    <Swiper {...params}>
      {entries.map((item, index) => {
        const linkUrl = '/steps/' + item.fields.urlTitle;
        return (
          <div className="slide" key={index}>
            <Link to={linkUrl} className="slide-link">
              <img
                src={item.fields.icon.fields.file.url}
                className="slide-image"
              />
              <div className="nav-steps-item">{item.fields.title}</div>
            </Link>
          </div>
        );
      })}
    </Swiper>
  );
};

export default SwiperPanel;
