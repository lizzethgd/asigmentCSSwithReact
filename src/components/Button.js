import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
    render() {
    const { colorButton, textButton } = this.props
      return (
<div><a className={'button '+colorButton} href="#!" target="_blank">{textButton}</a></div>)
}
}

Button.propTypes = {
    colorButton: PropTypes.string.isRequired,
    textButton: PropTypes.string.isRequired
  }
  
  Button.defaultProps = {
    colorButton: 'blue',
    textButton: 'READ MORE'
  }

export default Button