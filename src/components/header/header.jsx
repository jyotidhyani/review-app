import React from 'react';
import { Link } from 'react-router-dom';
import UserIcon from '../../assets/user.png';
import AddReview from '../add-review/index';

import './header.scss';

export default class Header extends React.Component {
  state = {
    showModal: false
  }
  showReviewModal = () => {
    this.setState({
      showModal: true
    })
  }
  hideReviewModal = () => {
    this.setState({
      showModal: false
    })
  }
  render() {
    const { showModal } = this.state;
    return (
      <div className="header">
        <Link className="logo" to='/review-app'>LOGO</Link>
        <div className="header-options">
          <Link className="option" to="/reviews">REVIEWS</Link>
          <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={UserIcon} alt="user-icon" className="user-icon-btn" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">My Profile</a></li>
              <li><button className="dropdown-item" onClick={this.showReviewModal}>Add a Review</button></li>
            </ul>
            {showModal && <AddReview hideModal={this.hideReviewModal} />}
          </div>
        </div>
      </div>
    )
  }
}
