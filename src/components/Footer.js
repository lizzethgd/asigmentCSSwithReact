import React, { Component } from 'react'
import FlickrItem from './FlickrItem'
import SocialItem from './SocialItem'     

class Footer extends Component {
    render() {
const socialIcon1 = 'twitter-square'
const socialIcon2 = 'facebook-square'
const socialIcon3 = 'vimeo-square'
const socialIcon4 = 'linkedin'
const socialIcon5 = 'google-plus-square'
const socialIcon6 = 'pinterest-square'
    return ( <footer>
         <div className="footer-top">
            <div className="footer-top-item">
                <h3>ABOUT US</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus, ligula varius habitasse mi enim proin
                    bibendum, orci sagittis taciti sociis blandit nec vestibulum</p>
                <p>
                    123 Street Name<br />
                    Road name<br />
                    London<br />
                    +44 7413913807<br />
                </p>
            </div>
            <div className="footer-top-item">
                <h3>LATEST TWEETS</h3>
                <p><span>@Jaynesh</span> Just submitted another great item on <span>#themeforest</span> about 3 hours
                    ago</p>
                <p><span>@Jaynesh</span> working on an avwesome theme for <span>#themeforest</span> about 3 weeks ago
                </p>
            </div>
            <div className="footer-top-item">
                <h3>LATEST POSTS</h3>
                <a className='lastest-post' href="#!" target="_blank">Lorem ipsum dolor sit amet, consect</a>
                <hr/>
                <a className='lastest-post' href="#!" target="_blank">sed et lumor tumor demsinden</a>
                <hr/>
                <a className='lastest-post' href="#!" target="_blank">iut labore et dolore magna sed do elusmos tempor</a>
                <hr />
                <a className='lastest-post' href="#!" target="_blank">conectetus apcheidei elt, sed do</a>
            </div>
            <div className="footer-top-item">
                <h3>FLICKR</h3>
                <div className="flickr">
                    <FlickrItem />
                    <FlickrItem />
                    <FlickrItem />
                    <FlickrItem />
                    <FlickrItem />
                    <FlickrItem />
                    <FlickrItem />
                    <FlickrItem />
                </div>
            </div>
        </div>
        <div className="footer-buttom">
            <div>COPYRIGHT© 203-2012 VENTUS INC. ALL RIGHTS RESERVED.</div>
            <div className="footer-icons">
                <div className="socials">
                <SocialItem socialIcon={socialIcon1}/>
                <SocialItem socialIcon={socialIcon2}/>
                <SocialItem socialIcon={socialIcon3}/>
                <SocialItem socialIcon={socialIcon4}/>
                <SocialItem socialIcon={socialIcon5}/>
                <SocialItem socialIcon={socialIcon6}/>
                </div>
                <div className="arrow-up">
                    <a href="#up"><i className="fas fa-arrow-up"></i></a>
                </div>
            </div>
        </div>
    </footer>
    )}}

export default Footer