import React from 'react';
import { connect } from 'react-redux';
import { addReview } from '../../redux/actions';
import AddReview from './add-review';

const mapDispatchToProps = {
  addReview
}

export default connect(null, mapDispatchToProps)(AddReview);