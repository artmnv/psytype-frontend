import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

import { logoutUser, fetchProfile } from "../actions/index"

const styles = {
  container: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 300,
    textAlign: "right",
    height: 40,
  },
  photo: {
    width: 30,
    height: 30,
    float: "right",
  },
  name: {
    float: "right",
    height: 30,
    lineHeight: "30px",
    fontSize: 18,
    margin: "0 7px 0 7px",
    color: "rgb(132, 129, 130)",
  },
  exit: {
    width: 18,
    heigth: 18,
    float: "right",
    display: "block",
    lineHeight: "40px",
    margin: "6px 0 0 0",
    cursor: 'pointer',
  },
}

class ProfileWidget extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchProfile())
  }

  handleExit = () => {
    const { dispatch } = this.props
    dispatch(logoutUser())
    this.props.history.push('')
  }

  render() {
    if (!this.props.isAuthenticated) {
      return null
    }

    return (
      <div style={styles.container}>
        <img
          style={styles.exit}
          src={require("./exit.svg")}
          onClick={this.handleExit}
        />
        <p style={styles.name}>{this.props.display_name}</p>
        <img style={styles.photo} src={this.props.photo} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { profile, auth } = state
  const { display_name, photo } = profile || {
    displayName: null,
    photo: null,
  }

  const { isAuthenticated } = auth || {
    isAuthenticated: false,
  }

  return {
    isAuthenticated,
    display_name,
    photo,
  }
}

export default connect(mapStateToProps)(withRouter(ProfileWidget))
