import React from 'react';

import './review-item.scss';

const ReviewItem = ({ userName, title, description, buyLink, imageUrl, shouldBuy }) => {
  return (
    <div className="review-item">
      <div className="reviewer">{userName}</div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="buy-link">Product URL: <a href={buyLink}>{buyLink}</a></div>
      <div className="recommendation">{shouldBuy === "1" ? <span><i class="fa fa-check-circle"></i> Yes, I recommend this product</span> : <span><i class="fa fa-times-circle"></i> No, I do not recommend this product</span>}</div>
      {imageUrl && <div className="product-image">
        <img src={imageUrl} alt="product-image" />
      </div>}
    </div>
  )
}

export default ReviewItem;
