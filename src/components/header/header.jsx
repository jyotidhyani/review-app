import React from 'react';
import { Link } from 'react-router-dom';
import UserIcon from '../../assets/user.png';

import './header.scss';

export default function Header() {

  return (
    <div className="header">
      <Link className="logo" to='/review-app'>LOGO</Link>
      <div className="header-options">
        <Link className="option" to="/reviews">REVIEWS</Link>
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={UserIcon} alt="user-icon" className="user-icon-btn" />
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">My Profile</a></li>
            <li><a class="dropdown-item" href="#">Add a Review</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
