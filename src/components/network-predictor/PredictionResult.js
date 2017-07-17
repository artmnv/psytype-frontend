import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PredictionResult extends Component {
  propTypes = {
    predicted_type: PropTypes.string
  }

  render () {
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
