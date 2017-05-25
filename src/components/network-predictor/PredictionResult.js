import React, { Component } from "react"

class PredictionResult extends Component {
  render() {
    if (!this.props.predicted_type) {
      return null
    }

    return (
      <div>
        <p>Результат: {this.props.predicted_type}</p>
      </div>
    )
  }
}

export default PredictionResult
