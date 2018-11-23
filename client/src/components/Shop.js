import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import ShopModal from "./ShopModal";

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      storeName: "",
      storeReviews: []
    };
  }

  openModal = (storeRef, storeName) => {
    this.getStoreData(storeRef);
    this.setState({
      isModalOpen: true,
      storeName: storeName
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  getStoreData = async storeRef => {
    const response = await fetch(`/api/review/all/${storeRef}`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      const storeReviews = await response.json();

      this.setState({
        storeReviews: storeReviews
      });
    }
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
              storeReviews={this.state.storeReviews}
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

export default Shop;
