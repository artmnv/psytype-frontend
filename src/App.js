import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import request from 'superagent';

import PredictionResult from "./PredictionResult"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        url: 'index.ascx'
    };
  }

  predictHandle = () => {
    request
      .post("https://tranquil-gasket-165218.appspot.com/predict")
      .send({ uid: this.state.url })
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Accept', 'application/json')
      .end((err, res) => {
        console.log(res.body)
        this.setState({
          result: res.body
        })
      });
  }

  urlChangeHandle = (e) => {
    this.setState({
      url: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Psychosophy type prediction</h2>
        </div>
        <p className="App-intro">
          VK page id:
          {" "}
          <input
            size="60"
            value={this.state.url}
            onChange={this.urlChangeHandle}
          />
          <br />
          <button onClick={this.predictHandle}>Predict</button>
        </p>
        <PredictionResult {...this.state.result} />
      </div>
    );
  }
}

export default App;
