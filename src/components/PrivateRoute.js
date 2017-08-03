import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class PrivateRoute extends Component {
  static propTypes = {
    component: PropTypes.func,
    isAuthenticated: PropTypes.bool
  }

  render () {
    const { component: Component, ...rest } = this.props

    return (
      <Route
        {...rest}
        render={props =>
          this.props.isAuthenticated
            ? <Component {...props} />
            : <Redirect to='/' />}
      />
    )
  }
}

const mapStateToProps = state => {
  const { auth } = state

  return {
    isAuthenticated: auth.isAuthenticated
  }
}

export default connect(mapStateToProps, null, null, {
  pure: false
})(PrivateRoute)
