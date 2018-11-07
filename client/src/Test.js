import React, { Component } from "react";

class Test extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      input: ""
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  handleChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  submitData = async () => {
    const response = await fetch("/api/new", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: this.state.input
      })
    });

    if (response.ok) {
      this.getData();
    }
  };

  getData = async () => {
    const response = await fetch("/api/data", {
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      const results = await response.json();
      console.log(results)
      const data = results.map(item => item.data)
      console.log(data)
      this.setState({
        data: [ ...data]
      });
      console.log(this.state.data)
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Add a new item:</h1>
        <input type="text" value={this.state.input} onChange={this.handleChange}/>
        <button onClick={this.submitData}>Submit</button>
        <h1>Item have been added:</h1>
        <ul>
          {this.state.data.map((item,i) => (
            <li index={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Test;
