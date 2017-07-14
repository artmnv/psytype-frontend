import React, { Component } from "react"

const styles = {
  wrapper: {
    border: '1px solid #fff',
    borderRadius: '0.625rem',
    textAlign: 'center',
    display: 'inline',
    padding: '7px 13px 7px 13px',
    cursor: 'pointer'
  }
}

class Button extends Component {
  handleTouchTap = () => {
    this.props.onTouchTap()
  }

  render() {
    return (
      <div onTouchTap={this.handleTouchTap} style={styles.wrapper}>
        {this.props.label}
      </div>
    )
  }
}

export default Button
