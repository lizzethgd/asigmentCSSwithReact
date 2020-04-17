import React, { Component } from 'react'
import Button from './Button'

class Tabs extends Component {
  render() {
    const colorButton = 'blue'
    const textButton = 'READ MORE'
    return (
    <div className="tabs">
    <input name="tabs" type="radio" id="tab-1" checked="checked" className="input"/>
    <label for="tab-1" className="label">DESING</label>
    <div className="panel">
      <h3>The desing</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus, ligula varius habitasse mi enim proin
              bibendum, orci sagittis taciti sociis blandit nec vestibulum.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus, ligula varius habitasse mi enim proin
                      bibendum, orci sagittis taciti sociis blandit nec vestibulum.</p>
    <Button colorButton ={colorButton} textButton ={textButton} />           
    </div> 
    <input name="tabs" type="radio" id="tab-2" className="input"/>
    <label for="tab-2" className="label">PRODUCTION</label>
    <div className="panel">
      <h3>The production</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus, ligula varius habitasse mi enim proin
              bibendum, orci sagittis taciti sociis blandit nec vestibulum.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus, ligula varius habitasse mi enim proin
                      bibendum, orci sagittis taciti sociis blandit nec vestibulum.</p>
     <Button colorButton ={colorButton} textButton ={textButton} />         
    </div>
  </div> )}}

export default Tabs
