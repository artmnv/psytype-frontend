import React, { Component } from "react"
import RaisedButton from "material-ui/RaisedButton"

class Home extends Component {
  authVK() {
    location.href =
      "https://oauth.vk.com/authorize?client_id=6045683&redirect_uri=http://127.0.0.1:3000/authVK&scope=262144"
  }

  render() {
    return (
      <div>
        Home
        <hr />
        <RaisedButton
          label="Войти через VK"
          primary={true}
          onTouchTap={this.authVK}
        />
      </div>
    )
  }
}

export default Home
