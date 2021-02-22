import React from 'react';
import BannerImage from '../../assets/banner1.png';

import './home.scss';

export default function Home(props) {

  return (
    <div className="banner">
      <div className="banner-content">
         your one stop solution for genuine reviews
      </div>
      <div className="banner-image">
        <img className="" src={BannerImage} alt="banner-image"/>
      </div>
    </div>
  )
}
