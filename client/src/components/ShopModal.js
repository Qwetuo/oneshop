import React, { Component } from "react";
import {
  Modal,
  Card,
  Image,
  Icon,
  ModalHeader,
  Button,
  Label
} from "semantic-ui-react";

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
            <Button color="blue">
              <Icon name="add" />
              Add review
            </Button>
            <Label as="a" basic color="blue" pointing="left">
              {this.props.storeReviews.length}
            </Label>
          </Button>
        </ModalHeader>
        {this.props.storeReviews.length === 0 ? (
          <div>
            <h3>There are currently no reviews for this store.</h3>
            <p>
              Feature for adding a new review is also not available yet, do
              check out Kate Spade store card instead.
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
                  Rating: {review.rating} / 5
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
