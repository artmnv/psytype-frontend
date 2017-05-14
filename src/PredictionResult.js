import React, { Component } from "react";

class PredictionResult extends Component {
  render() {
    return (
      <div>
        <p>{this.props.predicted_type}</p>
      </div>
    );
  }
}

export default PredictionResult;
