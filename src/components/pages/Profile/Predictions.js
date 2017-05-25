import React, { Component } from "react"
import { connect } from "react-redux"

class Predictions extends Component {
  render() {
    if (!this.props.prediction) {
      return null
    }

    return (
      <div>
        Результаты нейросети: {this.props.prediction["type"]}.
        <br />
        Протипировано 2 минуты назад.
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { profile } = state
  const { prediction } = profile || {
    prediction: null,
  }

  return {
    prediction,
  }
}

export default connect(mapStateToProps)(Predictions)
