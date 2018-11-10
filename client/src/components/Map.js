import React, { Component } from "react";
import MainContainer from "./MainContainer";

class Map extends Component {
  constructor() {
    super();
    this.state = {
      query: "wallet",
      lat: 1.293813,
      lng: 103.853438,
      results: [],
      finalResults: []
    };
  }

  componentDidMount = () => {
    this.renderMap();
  };

  renderMap = () => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${
        process.env.REACT_APP_GOOGLE_MAP_API
      }&libraries=places&callback=initMap`
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: this.state.lat, lng: this.state.lng },
      zoom: 18
    });

    var infowindow = new window.google.maps.InfoWindow();

    var service = new window.google.maps.places.PlacesService(map);
    const request = {
      keyword: this.state.query,
      location: { lat: this.state.lat, lng: this.state.lng },
      radius: 500
    };
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        this.setState({
          results: results
        });
        results.forEach(result => createMarker(result));
      }
    });

    const createMarker = place => {
      var marker = new window.google.maps.Marker({
        map: map,
        position: place.geometry.location,
        info: place
      });

      window.google.maps.event.addListener(marker, "click", function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
    };
  };

  render() {
    return (
      <main>
        <div id="map" />
        <MainContainer results={this.state.results} />
      </main>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default Map;
