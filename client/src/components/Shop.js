import React from "react";
import { Card } from "semantic-ui-react";

const Shop = props => {
  if (props.results.length > 0) {
    const sortedResults = props.results.sort((a,b) => b.rating - a.rating)
    return sortedResults.map(result => {
      return (
        <Card fluid>
          <Card.Content verticalAlign="middle">
            <Card.Header>{result.name}</Card.Header>
            <Card.Description>
              <ul>
                <li>Google Rating: {result.rating}</li>
                <li>Location: {result.geometry.location.toString()}</li>
                <li>Reference: {result.reference}</li>
              </ul>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>Number of post</Card.Content>
        </Card>
      );
    });
  } else {
    return <div>No Results Found</div>;
  }
};

export default Shop;
