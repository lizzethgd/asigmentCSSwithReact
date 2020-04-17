import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

class  SectionOneItem extends Component {
    render() {
    const colorButton = 'blue'
    const textButton = 'READ MORE'
    const { circleIcon, title } = this.props
    return (
   <div class="section-one-item">
                <span class="circle"><i class={'fas fa-'+circleIcon} ></i></span>
                <div>
                    <h3>{title}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus, ligula varius habitasse mi enim
                        proin
                        bibendum, orci sagittis taciti sociis blandit nec vestibulum. Interdum scelerisque fermentum
                        rhoncus...</p>
                        <Button colorButton ={colorButton}  textButton={textButton} />
                </div>
            </div>
            )}}

SectionOneItem.propTypes = {
    circleIcon: PropTypes,
    title: PropTypes.string.isRequired
  }

SectionOneItem.defaultProps = {
    circleIcon: '',
    title: ''
  }


export default SectionOneItem        