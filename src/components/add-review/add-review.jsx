import React from 'react';
import './add-review.scss';

export default class AddReview extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'bhuvnesh',
      title: '',
      description: '',
      buyLink: '',
      imageUrl: '',
      shouldBuy: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  saveChanges = () => {
    const { addReview, hideModal } = this.props;
    addReview(this.state);
    hideModal();
  }

  render() {
    const { hideModal } = this.props;
    return (
      <div className="add-review-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add a Review</h5>
              <button type="button" className="btn-close" onClick={hideModal}></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">Product Name</label>
                <input type="text" className="form-control" id="productName" name="title" onChange={this.handleChange} />
              </div>
              <div className="mb-3">
                <label for="description" className="form-label">Details</label>
                <textarea className="form-control" id="description" rows="3" name="description" onChange={this.handleChange}></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="buyLink" className="form-label">Product Link</label>
                <input type="text" className="form-control" id="buyLink" name="buyLink" onChange={this.handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="imageUrl" className="form-label">Product Link</label>
                <input type="file" className="form-control" id="imageUrl" name="imageUrl" onChange={this.handleChange} />
              </div>
              <input type="radio" className="btn-check" name="shouldBuy" id="option1" autocomplete="off" value="1" onChange={this.handleChange} />
              <label className="btn btn-secondary buy" for="option1">Buy</label>

              <input type="radio" className="btn-check" name="shouldBuy" id="option2" autocomplete="off" value="0" onChange={this.handleChange} />
              <label className="btn btn-secondary dont-buy" for="option2">Don't Buy</label>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={hideModal}>Close</button>
              <button type="button" className="btn btn-primary" onClick={this.saveChanges}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}