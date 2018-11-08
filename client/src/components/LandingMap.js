import React, { Component } from "react";

class LandingMap extends Component {
  constructor() {
    super();
    this.state = {
      mapSearch: "mall",
      lat: "1.293813",
      long: "103.853438"
    };
  }

  render() {
    return (
      <div className="landing-map">
        <iframe
          title="map"
          width="600"
          height="450"
          frameborder="0"
          src={`https://www.google.com/maps/embed/v1/search?q=${
            this.state.mapSearch
          }&key=${process.env.REACT_APP_GOOGLE_MAP_API}&zoom=16&center=${
            this.state.lat
          },${this.state.long}`}
          allowfullscreen
        />
      </div>
    );
  }
}

export default LandingMap;
