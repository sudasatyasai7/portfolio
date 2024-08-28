import React from 'react'
import './Hero.css'
import profile from '../../assets/prof.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <img src={profile} alt=''></img>
      <h1><span>I'm Satya Sai Suda,</span>frontend developer based in INDIA.</h1>
      <p>I am a frontend developer from Amaravathi,INDIA with 1 year of experience as a freelancer</p>
      <div className='butt'>
        <AnchorLink className='anchor' offset={50} href='#contact'><p>Connect With Me</p></AnchorLink>
        <p>My Resume</p>
      </div>
    </div>
  )
}

export default Hero
