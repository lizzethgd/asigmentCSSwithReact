import React, { Component } from 'react'
import SectionOneItem from './SectionOneItem'
import BannerWhite from './BannerWhite'
import BannerBlue from './BannerBlue'
import Tabs from './Tabs'
import imagePlaceholder from '../img-placeholder.png'
 
class Main extends Component {
    render() {
    const title1 = 'SUPERBLY RESPONSIVE'
    const title2 = 'SQUEEKY CLEAN'
    const title3 = 'MULTI PURPOSE'
    const title4 = 'HIGHLY FLEXIBLE'
    const circleIcon1 = 'mobile-alt'
    const circleIcon2 = 'desktop'
    const circleIcon3 = 'laptop'
    const circleIcon4 = 'recycle'
    const bannerWhiteTitle1 ='Blog Title'
    const bannerWhiteTitle2 ='John Smith'
    const bannerWhiteText = '"Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus, ligula varius habitasse mi enim proin bibendum, orci sagittis taciti sociis blandit nec vestibulum."'
    const textPart1 = 'GET IN TOUCH WITH US'
    const textSpan = 'NOW!'
    const textPart2 = ''
    const textBannerButton = 'CONTACT US'
    return (  
        <main>
        <div className="section-one">
        <SectionOneItem title={title1} circleIcon={circleIcon1} />
        <SectionOneItem title={title2} circleIcon={circleIcon2} />
        <SectionOneItem title={title3} circleIcon={circleIcon3} />
        <SectionOneItem title={title4} circleIcon={circleIcon4} />
        </div>
        <div className="borderimg-recent-work"> </div>
        <div className="section-two">
        <BannerWhite image={imagePlaceholder} bannerWhiteTitle={bannerWhiteTitle1} bannerWhiteText={bannerWhiteText}/>
        <BannerWhite image={imagePlaceholder} bannerWhiteTitle={bannerWhiteTitle1} bannerWhiteText={bannerWhiteText}/>
        <BannerWhite image={imagePlaceholder} bannerWhiteTitle={bannerWhiteTitle1} bannerWhiteText={bannerWhiteText}/>
        </div>
        <div className="section-three">
            <div className="testimonial-part">
                <div className="borderimg-testimonials"></div>
                <div className="testimonials">
                <BannerWhite  bannerWhiteTitle={bannerWhiteTitle2} bannerWhiteText={bannerWhiteText}/>
                <BannerWhite bannerWhiteTitle={bannerWhiteTitle2} bannerWhiteText={bannerWhiteText}/>
                </div>
                <div className="testimonials">
                <BannerWhite bannerWhiteTitle={bannerWhiteTitle2} bannerWhiteText={bannerWhiteText}/>
                <BannerWhite bannerWhiteTitle={bannerWhiteTitle2} bannerWhiteText={bannerWhiteText}/>
                </div>
            </div>
            <div className="development-part" >
            <div className="borderimg-development"></div>
             <Tabs />                   
            </div> 
        </div>
        <BannerBlue textPart1={textPart1} textSpan={textSpan} textPart2={textPart2} textBannerButton={textBannerButton} /> 
        </main>
        )
    }}

export default Main
