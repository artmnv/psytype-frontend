import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import RaisedButton from "material-ui/RaisedButton"
import Button from "../../Button"

class Home extends Component {
  authVK() {
    location.href =
      "https://oauth.vk.com/authorize?client_id=6045683&redirect_uri=http://127.0.0.1:3000/authVK&scope=262144"
  }

  navToProfile = () => {
    this.props.history.push("/profile")
  }

  render() {
    let button
    if (this.props.auth.isAuthenticated) {
      button = <Button label="К профилю" onTouchTap={this.navToProfile} />
    } else {
      button = <Button label="Войти через VK" onTouchTap={this.authVK} />
    }
    return (
      <div>
        <h1>Привет!</h1>
        Здесь мы учим нейросеть типировать людей по Афанасьеву (Психософия, Психе-йога).
        <br /><br /><br />
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
    auth,
  }
}

export default connect(mapStateToProps)(withRouter(Home))
