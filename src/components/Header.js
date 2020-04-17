import React, { Component } from 'react'
import BannerBlue from './BannerBlue'    
import Button from './Button'
import headerLogo from '../header-img.png'

class Header extends Component {
    render() {
const textPart1 = 'CREATE A'
const textSpan = 'POWERFUL'
const textPart2 = 'SOLUTION NOW'    
const colorButton = 'blue'
const textButton = 'LEARN MORE'
const textBannerButton = 'GET STARTERD'
return (
    <header>
    <c id="up"></c>
    <div class="header-container-top">
        <div class="header-imagen">
        <img  id="header-img" src={headerLogo} alt=''/> 
        </div>
        <div class="header-description">
            <div>
                <h1><span>POWERFULLY SIMPLE </span>WITH A <br /> <span>SQUEEKY </span>CLEAN DESING.</h1>
            </div>
            <div>
                <p>Find out how you can offer quick and powerful soutions to yur costumers now!</p>
            </div>
            <Button colorButton ={colorButton} textButton ={textButton} />
        </div>
    </div>
        <BannerBlue textPart1={textPart1} textSpan={textSpan} textPart2={textPart2} textBannerButton={textBannerButton} />      
</header>
)}}

export default Header


