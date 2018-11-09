import React, { Component } from "react";
import "./App.css";
// import Test from "./Test";
import NavBar from "./components/NavBar";
import SearchSegment from "./components/SearchSegment";
import Map from "./components/Map";
import AccountModal from "./components/AccountModal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAccModalOpen: false,
      isLoggedIn: false,
      user: ""
    };
  }

  openModal = () => {
    this.setState({
      isAccModalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      isAccModalOpen: false
    });
  };

  handleLogIn = () => {
    this.setState({
      isAccModalOpen: false,
      isLoggedIn: true,
      user: localStorage.getItem("user")
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar openModal={this.openModal} isLoggedIn={this.state.isLoggedIn} />
        <AccountModal isOpen={this.state.isAccModalOpen} closeModal={this.closeModal} handleLogIn={this.handleLogIn}/>
        <Map />
        <SearchSegment />
        <div className="main-container">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          iusto voluptatibus illo similique laborum, facilis praesentium enim,
          molestiae, quisquam sint temporibus? Pariatur, vero. Officia voluptate
          fuga voluptatem, veritatis sequi asperiores. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Commodi iusto voluptatibus illo
          similique laborum, facilis praesentium enim, molestiae, quisquam sint
          temporibus? Pariatur, vero. Officia voluptate fuga voluptatem,
          veritatis sequi asperiores. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Commodi iusto voluptatibus illo similique laborum,
          facilis praesentium enim, molestiae, quisquam sint temporibus?
          Pariatur, vero. Officia voluptate fuga voluptatem, veritatis sequi
          asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Commodi iusto voluptatibus illo similique laborum, facilis praesentium
          enim, molestiae, quisquam sint temporibus? Pariatur, vero. Officia
          voluptate fuga voluptatem, veritatis sequi asperiores. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Commodi iusto
          voluptatibus illo similique laborum, facilis praesentium enim,
          molestiae, quisquam sint temporibus? Pariatur, vero. Officia voluptate
          fuga voluptatem, veritatis sequi asperiores. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Commodi iusto voluptatibus illo
          similique laborum, facilis praesentium enim, molestiae, quisquam sint
          temporibus? Pariatur, vero. Officia voluptate fuga voluptatem,
          veritatis sequi asperiores.
        </div>
        {/* <Test /> */}
      </div>
    );
  }
}

export default App;
