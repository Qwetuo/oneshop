import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Shop from "./Shop";
import { connect } from "react-redux";

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
          <Shop results={this.props.search.searchResults} />
        </Card.Group>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
});

export default connect(mapStateToProps)(MainContainer);
