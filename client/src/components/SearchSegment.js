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
      autocomplete: {}
    };
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.search.searchResults !== nextProps.search.searchResults) {
      this.renderAutocomplete();
    }
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = e => {
    const place = this.state.autocomplete.getPlace();
    const location = place ? place.geometry.location.toJSON() : {}
    this.props.changeSearch(this.state.category, location);
  };

  renderAutocomplete = () => {
    const input = document.getElementById("place-search");
    const options = {
      types: ["establishment"],
      componentRestrictions: { country: "sg" }
    };
    const autocomplete = new window.google.maps.places.Autocomplete(
      input,
      options
    );
    this.setState({
      autocomplete
    });
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
                id="place-search"
                placeholder="Search location"
              />
              <Icon name="search" circular link onClick={this.handleSubmit} />
            </Grid>
          </Segment>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  changeSearch: (query, location) => dispatch(changeSearch(query, location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchSegment);
