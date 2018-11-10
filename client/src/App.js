import React, { Component } from "react";
import "./App.css";
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
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar openModal={this.openModal} isLoggedIn={this.state.isLoggedIn} />
        <AccountModal
          isOpen={this.state.isAccModalOpen}
          closeModal={this.closeModal}
          handleLogIn={this.handleLogIn}
        />
        <Map />
        <SearchSegment />
      </div>
    );
  }
}

export default App;
