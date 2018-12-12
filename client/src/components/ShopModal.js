import React, { Component } from "react";
import {
  Modal,
  Card,
  Image,
  Icon,
  ModalHeader,
  Button,
  Label,
  Rating
} from "semantic-ui-react";
import AddReviewModal from "./AddReviewModal";

class ShopModal extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false
    };
  }

  handleOpen = () => {
    this.setState({
      modalOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      modalOpen: false
    });
  };

  render() {
    return (
      <Modal
        className="account-modal"
        open={this.props.isOpen}
        onClose={this.props.closeModal}
        closeIcon
      >
        <ModalHeader>
          {this.props.storeName}
          <Button floated="right" as="div" labelPosition="right">
            <Button color="blue" onClick={this.handleOpen}>
              <Icon name="add" />
              Add review
            </Button>
            <Label as="a" basic color="blue" pointing="left">
              {this.props.storeReviews.length}
            </Label>
          </Button>
          <AddReviewModal
            isOpen={this.state.modalOpen}
            closeModal={this.handleClose}
            storeRef={this.props.storeRef}
            storeName={this.props.storeName}
          />
        </ModalHeader>
        {this.props.storeReviews.length === 0 ? (
          <div>
            <h3>There are currently no reviews for this store.</h3>
            <p>
              Login to start writing a review for the store. Or check out the
              store card, Kate Spade, for reviews that have been seeded in.
            </p>
          </div>
        ) : (
          this.props.storeReviews.map((review, i) => {
            return (
              <Card key={i}>
                <Image src={review.image} />
                <Card.Content>
                  <Card.Header>{review.author.username}</Card.Header>
                  <Card.Meta>
                    <span className="date">Posted on {review.createdAt}</span>
                  </Card.Meta>
                  <Card.Description>{review.review}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Rating
                    icon="star"
                    defaultRating={review.rating}
                    maxRating={5}
                    disabled
                  />
                  <Button floated="right" as="div" labelPosition="right">
                    <Button color="red">
                      <Icon name="thumbs up" />
                      Like
                    </Button>
                    <Label as="a" basic color="red" pointing="left">
                      {review.likes.length}
                    </Label>
                  </Button>
                </Card.Content>
              </Card>
            );
          })
        )}
      </Modal>
    );
  }
}

export default ShopModal;
