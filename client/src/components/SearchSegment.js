import React, { Component } from "react";
import { Grid, Icon, Segment, Select, Input } from "semantic-ui-react";
import categories from "../categoryOfStores";
import { connect } from "react-redux";
import { changeSearch } from "../actions/searchActions";

class SearchSegment extends Component {
  constructor() {
    super();
    this.state = {
      category: "",
      place: ""
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = e => {
    this.props.changeSearch(this.state.category);
  };

  render() {
    return (
      <div className="search-segment-container">
        <div className="search-segment">
          <Segment color="blue" raised>
            <Grid columns={3} stackable textAlign="center">
              <div>
                <Icon size="big" color="blue" name="shopping bag" />
                <Select
                  placeholder="Search by Category"
                  options={categories}
                  name="category"
                  value={this.state.category}
                  onChange={this.handleChange}
                />
              </div>
              <h5>at</h5>
              <Input
                name="place"
                onChange={this.handleChange}
                value={this.state.place}
                placeholder="Search..."
              />
              <Icon name="search" circular link onClick={this.handleSubmit} />
            </Grid>
          </Segment>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeSearch: query => dispatch(changeSearch(query))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchSegment);
