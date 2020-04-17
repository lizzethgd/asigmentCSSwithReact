import React, { Component } from 'react'
import PropTypes from 'prop-types'  

class BannerWhite extends Component {
    render() {
    const {image, bannerWhiteTitle, bannerWhiteText } = this.props
    return (
<div className="banner-white">
                <div className="banner-white-item">
                <img className="banner-white-image" src={image} alt=''/>
                <p className="text-banner-white"><b>{bannerWhiteTitle}</b><br/><span>{bannerWhiteText}</span></p>
                </div>
</div>)}}

BannerWhite.propTypes = {
    image: PropTypes,
    bannerWhiteTitle: PropTypes.string.isRequired,
    bannerWhiteText: PropTypes.string.isRequired

  }

BannerWhite.defaultProps = {
    image: '',
    bannerWhiteTitle: '',
    bannerWhiteText: ''
  }

export default BannerWhite
