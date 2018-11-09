import React, { Component } from "react";

class Map extends Component {
  constructor() {
    super();
    this.state = {
      query: "shopping mall",
      lat: 1.293813,
      lng: 103.853438
    };
  }

  componentDidMount = async () => {
    this.getLocation();
    this.renderMap();
  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
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
      center: { lat: this.state.lat, lng: this.state.lng },
      zoom: 16
    });

    var infowindow = new window.google.maps.InfoWindow();

    // const latlng = map.getCenter();
    var service = new window.google.maps.places.PlacesService(map);
    const request = {
      keyword: this.state.query,
      location: { lat: this.state.lat, lng: this.state.lng },
      radius: 500
    };
    service.nearbySearch(request, callback);

    function callback(results, status) {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        results.forEach(result => createMarker(result));
      }
    }

    function createMarker(place) {
      var placeLoc = place.geometry.location;
      var marker = new window.google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

      window.google.maps.event.addListener(marker, "click", function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
    }
  };

  render() {
    return (
      <main>
        <div id="map" />
      </main>
    );
  }

  // getVenues = () => {
  //   const endPoint = "https://api.foursquare.com/v2/venues/explore?"
  //   const parameters = {
  //     client_id: "PMHC2WA1VCBHVYOPPSJ0QSBYTLRF4PNJ04OWVWV0PZJ0QFIR",
  //     client_secret: "CULSZZ44YAEBOWBFGPB4BF5ISRXXSNYR0EE3JV3CNE2ZWHV0",
  //     query: "food",
  //     near: "Sydney",
  //     v: "20182507"
  //   }

  //   fetch(endPoint + new URLSearchParams(parameters))
  //     .then(response => {
  //       this.setState({
  //         venues: response.data.response.groups[0].items
  //       }, this.renderMap())
  //     })
  //     .catch(error => {
  //       console.log("ERROR!! " + error)
  //     })

  // }

  // Display Dynamic Markers
  // this.state.venues.map(myVenue => {
  //   var contentString = `${myVenue.venue.name}`;

  //   // Create A Marker
  //   var marker = new window.google.maps.Marker({
  //     position: {
  //       lat: myVenue.venue.location.lat,
  //       lng: myVenue.venue.location.lng
  //     },
  //     map: map,
  //     title: myVenue.venue.name
  //   });

  //   // Click on A Marker!
  //   marker.addListener("click", function() {
  //     // Change the content
  //     infowindow.setContent(contentString);

  //     // Open An InfoWindow
  //     infowindow.open(map, marker);
  //   });
  // });
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
