import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import CircularProgress from "material-ui/CircularProgress"
import { connect } from "react-redux"

import { requestAuthProfile } from "../../../actions"

const styles = {
  container: {
    width: '400',
    margin: "0 auto",
    textAlign: "center",
  },
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
    .substr(1)
        .split("&")
        .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
}

class AuthVK extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    const code = findGetParameter('code')
    dispatch(requestAuthProfile(code))
  }

  componentWillReceiveProps(nextProps) {
    const { user_id } = nextProps
    if (user_id) {
      this.props.history.push("/profile")
    }
  }

  render() {
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
  const { id } = profile || {
    id: null,
  }

  return {
    user_id: id,
  }
}

export default connect(mapStateToProps)(withRouter(AuthVK))
