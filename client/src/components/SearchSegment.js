import React, { Component } from "react";
import { Grid, Icon, Search, Segment, Select } from "semantic-ui-react";

const options = [
  {
    key: "1",
    value: "1",
    text: "1"
  },
  {
    key: "2",
    value: "2",
    text: "2"
  },
  {
    key: "3",
    value: "3",
    text: "3"
  },
  {
    key: "4",
    value: "4",
    text: "4"
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
                <Select placeholder="Shop for Category" options={options} />
              </div>
              <h5>at</h5>
              <Search placeholder="Shops / Mall / ..." />
            </Grid>
          </Segment>
        </div>
      </div>
    );
  }
}

export default SearchSegment;
