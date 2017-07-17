import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Button from '../../Button'

class Home extends Component {
  static propTypes = {
    history: PropTypes.object,
    auth: PropTypes.shape({
      isAuthenticated: PropTypes.bool
    })
  }

  authVK () {
    window.location.href =
      'https://oauth.vk.com/authorize?client_id=6045683&redirect_uri=http://127.0.0.1:3000/authVK&scope=262144'
  }

  navToProfile = () => {
    this.props.history.push('/profile')
  }

  render () {
    return (
      <div>
        <h1>Привет!</h1>
        Здесь мы учим нейросеть типировать людей по Афанасьеву (Психософия,
        Психе-йога).
        <br />
        <br />
        <br />
        <Button label="Я хочу помочь обучению" onTouchTap={this.authVK} />
        &nbsp;&nbsp;&nbsp;
        <Button label="Протипируй меня" onTouchTap={this.authVK} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { auth } = state

  return {
    auth
  }
}

export default connect(mapStateToProps)(withRouter(Home))
