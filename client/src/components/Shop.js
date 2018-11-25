import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import ShopModal from "./ShopModal";
import { connect } from "react-redux";
import { fetchStoreReviews } from "../actions/reviewActions";

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      storeName: ""
    };
  }

  componentWillMount() {
    this.props.fetchStoreReviews();
  }

  openModal = (storeRef, storeName) => {
    if (!this.state.isModalOpen) {
      this.props.fetchStoreReviews(storeRef);
      this.setState({
        isModalOpen: true,
        storeName: storeName
      });
    }
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  render() {
    if (this.props.results.length > 0) {
      const sortedResults = this.props.results.sort(
        (a, b) => b.rating - a.rating
      );
      return sortedResults.map((result, i) => {
        return (
          <Card
            key={i}
            onClick={() => this.openModal(result.reference, result.name)}
            fluid
          >
            <Card.Content>
              <Card.Header>{result.name}</Card.Header>
              <Card.Description>
                <ul>
                  <li>Google Rating: {result.rating}</li>
                  <li>Location: {result.geometry.location.toString()}</li>
                  <li>Reference: {result.reference}</li>
                </ul>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>{}</Card.Content>
            <ShopModal
              isOpen={this.state.isModalOpen}
              closeModal={this.closeModal}
              storeReviews={this.props.reviews}
              storeName={this.state.storeName}
            />
          </Card>
        );
      });
    } else {
      return <div>No Results Found</div>;
    }
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews.items
});

export default connect(
  mapStateToProps,
  { fetchStoreReviews }
)(Shop);
