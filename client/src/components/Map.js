import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSearchResults } from "../actions/searchActions";

class Map extends Component {
  componentDidMount = () => {
    this.renderMap();
  };

  componentWillReceiveProps = nextProps => {
    if (this.props.search.query !== nextProps.search.query) {
      this.renderMap();
    }
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
      center: { lat: this.props.search.lat, lng: this.props.search.lng },
      zoom: 18
    });

    var infowindow = new window.google.maps.InfoWindow();

    var service = new window.google.maps.places.PlacesService(map);
    const request = {
      keyword: this.props.search.query,
      location: { lat: this.props.search.lat, lng: this.props.search.lng },
      radius: 500
    };
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        this.props.updateSearchResults(results);
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

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  updateSearchResults: results => dispatch(updateSearchResults(results))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
