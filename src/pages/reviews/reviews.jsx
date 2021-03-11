import React from 'react';
import { connect } from 'react-redux';
import ReviewItem from "../../components/review-item/review-item";

import './reviews.scss';

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews">
      {reviews.reverse().map(review =>
        <ReviewItem key={review.id} {...review} />
      )}
    </div>
  )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Reviews);