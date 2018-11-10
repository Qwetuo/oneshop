import React, { Component } from "react";
import { Grid, Icon, Search, Segment, Select } from "semantic-ui-react";

const options = [
  {
    key: "wallet",
    value: "wallet",
    text: "wallet"
  }
];

class SearchSegment extends Component {
  render() {
    return (
      <div className="search-segment-container">
        <div className="search-segment">
          <Segment color="blue" raised>
            <Grid columns={3} stackable textAlign="center">
              <div>
                <Icon size="big" color="purple" name="shopping bag" />
                <Select
                  placeholder="Shop for Category (fixed)"
                  options={options}
                />
              </div>
              <h5>at</h5>
              <Search placeholder="Fixed Coord: Raffles City" />
            </Grid>
          </Segment>
        </div>
      </div>
    );
  }
}

export default SearchSegment;
