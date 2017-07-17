import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
  static propTypes = {
    onTouchTap: PropTypes.func,
    label: PropTypes.string
  }

  handleTouchTap = () => {
    this.props.onTouchTap()
  }

  render () {
    return (
      <div onTouchTap={this.handleTouchTap} style={styles.wrapper}>
        {this.props.label}
      </div>
    )
  }
}

export default Button
