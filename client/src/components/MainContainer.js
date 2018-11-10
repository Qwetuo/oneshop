import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Shop from "./Shop";

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }

  render() {
    return (
      <div className="main-container">
        <Card.Group>
          <Shop results={this.props.results} />
        </Card.Group>
      </div>
    );
  }
}

export default MainContainer;
