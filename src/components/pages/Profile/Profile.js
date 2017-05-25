import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Wizard from "./Wizard";
import Predictions from "./Predictions";

class Profile extends Component {
  render() {
    if (this.props.profile.predictions) {
    }
    return (
      <div>
        <Link to="/">Home</Link>
        <hr />
        {this.props.profile.prediction ? <Predictions /> : null}
        {!this.props.profile.opinion ? <Wizard /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { profile } = state;

  return {
    profile
  };
};

export default connect(mapStateToProps)(Profile);
