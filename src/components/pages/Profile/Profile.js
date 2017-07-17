import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Predictions from './Predictions'
import { fetchPrediction } from '../../../actions'

class Profile extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    prediction: PropTypes.object
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchPrediction())
  }

  render () {
    return (
      <div>
        {this.props.prediction ? <Predictions /> : null}
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

export default connect(mapStateToProps)(Profile)
