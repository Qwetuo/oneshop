import React, { Component } from "react";
import "./App.css";
// import Test from "./Test";
import LandingMap from "./components/LandingMap";
import NavBar from "./components/NavBar"

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <LandingMap />
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
