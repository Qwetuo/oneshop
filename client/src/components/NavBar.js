import React from "react";
import { Menu, Button } from "semantic-ui-react";

const NavBar = props => (
  <div>
    <Menu borderless fixed="top" pointing className="nav-bar">
      <Menu.Item header name="Main">
        <h2>One Shop</h2>
      </Menu.Item>
      <Menu.Menu position="right">
        {props.isLoggedIn ? (
          <div className="nav-bar-in">
            <h4>Logged In As:</h4>
            <h3> {localStorage.getItem("user")}</h3>
          </div>
        ) : (
          <Button onClick={props.openModal} className="button" color="blue">
            Register / Login
          </Button>
        )}
      </Menu.Menu>
    </Menu>
  </div>
);

export default NavBar;
