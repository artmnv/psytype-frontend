import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
const BarChart = require('react-d3-basic').BarChart

class Predictions extends Component {
  static propTypes = {
    prediction: PropTypes.shape({
      details: PropTypes.array
    })
  }

  render () {
    if (!this.props.prediction || !this.props.prediction.details) {
      return null
    }

    const width = 500
    const height = 200
    const title = 'Bar Chart'
    const chartSeries = [
      {
        field: 'p',
        name: 'p'
      }
    ]
    const x = function (d) {
      let type = d.type
      type = type
        .replace(/e/, 'Э')
        .replace(/w/, 'В')
        .replace(/l/, 'Л')
        .replace(/p/, 'Ф')
      return type
    }
    const xScale = 'ordinal'
    // const xLabel = 'Letter'
    // const yLabel = 'Frequency'
    const yTicks = [10, '%']

    return (
      <div>
        <BarChart
          title={title}
          data={this.props.prediction.details}
          width={width}
          height={height}
          chartSeries={chartSeries}
          x={x}
          xScale={xScale}
          yTicks={yTicks}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { prediction } = state

  return {
    prediction
  }
}

export default connect(mapStateToProps)(Predictions)
