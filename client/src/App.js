import React, { Component } from "react";
import "./App.css";
// import Test from "./Test";
import NavBar from "./components/NavBar"
import SearchSegment from "./components/SearchSegment"
import Map from "./components/Map"

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Map />
      <SearchSegment />
        <div className="main-container">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi iusto voluptatibus illo similique laborum, facilis praesentium enim, molestiae, quisquam sint temporibus? Pariatur, vero. Officia voluptate fuga voluptatem, veritatis sequi asperiores.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi iusto voluptatibus illo similique laborum, facilis praesentium enim, molestiae, quisquam sint temporibus? Pariatur, vero. Officia voluptate fuga voluptatem, veritatis sequi asperiores.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi iusto voluptatibus illo similique laborum, facilis praesentium enim, molestiae, quisquam sint temporibus? Pariatur, vero. Officia voluptate fuga voluptatem, veritatis sequi asperiores.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi iusto voluptatibus illo similique laborum, facilis praesentium enim, molestiae, quisquam sint temporibus? Pariatur, vero. Officia voluptate fuga voluptatem, veritatis sequi asperiores.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi iusto voluptatibus illo similique laborum, facilis praesentium enim, molestiae, quisquam sint temporibus? Pariatur, vero. Officia voluptate fuga voluptatem, veritatis sequi asperiores.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi iusto voluptatibus illo similique laborum, facilis praesentium enim, molestiae, quisquam sint temporibus? Pariatur, vero. Officia voluptate fuga voluptatem, veritatis sequi asperiores.
        </div>
        {/* <Test /> */}
      </div>
    );
  }
}

export default App;
