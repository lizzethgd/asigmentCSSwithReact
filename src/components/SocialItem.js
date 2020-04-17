import React, { Component } from 'react'
import PropTypes from 'prop-types' 

class SocialItem extends Component {
  render() {
    const { socialIcon } = this.props
    return(
    <div className="social"><a href="#!" target="_blank">
        <i className={'fab fa-'+socialIcon} ></i></a></div>
)}}

SocialItem.propTypes = {
  socialIcon: PropTypes.string.isRequired
}

SocialItem.defaultProps = {
  socialIcon: ''
}

export default SocialItem