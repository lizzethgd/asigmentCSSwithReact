import React, { Component } from 'react'
import PropTypes from 'prop-types'  
import Button from './Button'

class BannerBlue extends Component {
    render() {
    const colorButton = 'white'
    const { textPart1, textSpan,textPart2, textBannerButton } = this.props
    return (
    <div className="banner">
    <div className="banner-speach">
        <h2>{textPart1}<span>{textSpan}</span>{textPart2}</h2>
    </div>
    <Button colorButton ={colorButton} textButton ={textBannerButton} />
</div>)
}}

BannerBlue.propTypes = {
    textPart1: PropTypes.string.isRequired,
    textSpan: PropTypes.string.isRequired,
    textPart2: PropTypes.string,
    textBannerButton: PropTypes.string.isRequired
  }
  
  BannerBlue.defaultProps = {
    textPart1: '',
    textSpan: '',
    textPart2: '',
    textBannerButton: ''
  }

export default BannerBlue