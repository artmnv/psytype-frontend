import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import CircularProgress from 'material-ui/CircularProgress'
import { connect } from 'react-redux'

import { requestAuthProfile } from '../../../actions'

const styles = {
  container: { width: '400', margin: '0 auto', textAlign: 'center' }
}

function findGetParameter (parameterName) {
  let result = null
  let tmp = []
  window.location.search.substr(1).split('&').forEach(item => {
    tmp = item.split('=')
    if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1])
  })
  return result
}

class AuthVK extends Component {
  propTypes = {
    dispatch: PropTypes.func,
    userId: PropTypes.number,
    history: PropTypes.func
  }

  componentDidMount () {
    const { dispatch } = this.props
    const code = findGetParameter('code')
    dispatch(requestAuthProfile(code))
  }

  componentWillReceiveProps (nextProps) {
    const { userId } = nextProps
    if (userId) {
      this.props.history.push('/profile')
    }
  }

  render () {
    return (
      <div style={styles.container}>
        <h2>Авторизация</h2>
        <br /><br />
        <CircularProgress size={80} thickness={5} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { profile } = state
  const { id } = profile || { id: null }

  return { userId: id }
}

export default connect(mapStateToProps)(withRouter(AuthVK))
