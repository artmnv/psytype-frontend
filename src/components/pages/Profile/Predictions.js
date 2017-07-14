import React, { Component } from "react"
import { connect } from "react-redux"
import { Bar } from "react-d3-core"
var Chart = require("react-d3-core").Chart
var LineChart = require("react-d3-basic").LineChart
var BarChart = require("react-d3-basic").BarChart

class Predictions extends Component {
  render() {
    console.log(this.props.prediction)
    if (!this.props.prediction || !this.props.prediction.details) {
      return null
    }

    var chartData = [
      {
        letter: "A",
        frequency: 0.2,
      },
      {
        letter: "B",
        frequency: 0.3,
      },
    ]

    var width = 500,
      height = 200,
      title = "Bar Chart",
      chartSeries = [
        {
          field: "p",
          name: "p",
        },
      ],
      x = function(d) {
        let type = d.type
        type = type
          .replace(/e/, "Э")
          .replace(/w/, "В")
          .replace(/l/, "Л")
          .replace(/p/, "Ф")
        return type
      },
      xScale = "ordinal",
      xLabel = "Letter",
      yLabel = "Frequency",
      yTicks = [10, "%"]

    console.log(this.props.prediction)

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
    prediction,
  }
}

export default connect(mapStateToProps)(Predictions)
