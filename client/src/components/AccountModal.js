import React, { Component } from "react";
import { Modal, Button, Message, Divider } from "semantic-ui-react";

class AccountModal extends Component {
  constructor() {
    super();
    this.state = {
      componentToDisplay: "login",
      username: "",
      password: "",
      err: ""
    };
  }

  toggleComponentToDisplay = event => {
    event.preventDefault();
    this.setState({
      err: ""
    });
    this.state.componentToDisplay === "login"
      ? this.setState({
          componentToDisplay: "signup"
        })
      : this.setState({
          componentToDisplay: "login"
        });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const endpoint =
      this.state.componentToDisplay === "login" ? "signin" : "signup";

    const response = await fetch(`/api/account/${endpoint}`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("user", data.username);
      this.props.handleLogIn();
    } else {
      this.setState({
        err: data.message
      });
    }
  };

  render() {
    return (
      <Modal
        className="account-modal"
        open={this.props.isOpen}
        onClose={this.props.closeModal}
        closeIcon
      >
        <Modal.Header className="text-center">
          {this.state.componentToDisplay === "login"
            ? "Log In to One Shop"
            : "Sign Up for One Shop"}
        </Modal.Header>

        <br />
        <Button
          fluid
          basic
          color="blue"
          onClick={this.toggleComponentToDisplay}
        >
          {this.state.componentToDisplay === "login"
            ? "New Here? Click here to sign up"
            : "Have an account? Click here to sign in"}
        </Button>
        <Divider />

        <div className="account-form">
          <form className="account-form ui large form">
            <div className="ui stacked secondary  segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon" />
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon" />
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Password"
                  />
                </div>
              </div>

              <Button fluid type="submit" onClick={this.handleSubmit}>
                {this.state.componentToDisplay === "login"
                  ? "Log In"
                  : "Sign Up"}
              </Button>

              {this.state.err === "" ? null : (
                <Message negative>
                  <Message.Header>Error:</Message.Header>
                  <p>{this.state.err}</p>
                </Message>
              )}
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

export default AccountModal;
