import React, { Component } from "react";
import { Modal, ModalHeader, Form, Rating } from "semantic-ui-react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStoreReview } from "../actions/reviewActions";

class AddReviewModal extends Component {
  constructor() {
    super();
    this.state = {
      review: "",
      image: "",
      rating: "",
      message: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleRate = (e, { rating }) => this.setState({ rating });

  handleSubmit = () => {
    if (this.state.review === "" || this.state.rating === "") {
      return this.setState({
        message:
          "Please make sure you have written a review as well as gave an rating before submitting."
      });
    }

    const body = {
      image: this.state.image,
      review: this.state.review,
      rating: this.state.rating
    };

    // yet to catch error message
    this.props.createStoreReview(this.props.storeRef, body);
    this.props.closeModal();
  };

  render() {
    return (
      <Modal
        className="account-modal"
        open={this.props.isOpen}
        onClose={this.props.closeModal}
        closeIcon
      >
        <ModalHeader>Add a New Review for {this.props.storeName}</ModalHeader>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            placeholder="Submit an image url"
            label="Image"
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <Form.Field
            control="textarea"
            rows="3"
            label="Review"
            placeholder="Jot down your review here"
            name="review"
            value={this.state.review}
            onChange={this.handleChange}
          />
          <h5>Rating</h5>
          <Rating
            size="huge"
            icon="star"
            rating={this.state.rating}
            maxRating={5}
            onRate={this.handleRate}
          />
          <h5>{this.state.message}</h5>
          <Form.Button fluid content="Add" onClick={this.handleSubmit} />
        </Form>
      </Modal>
    );
  }
}

AddReviewModal.propTypes = {
  createStoreReview: PropTypes.func.isRequired
};

export default connect(
  null,
  { createStoreReview }
)(AddReviewModal);
