import React from 'react'
import './About.css'
import theme from '../../assets/theme_pattern.svg'
import profile from '../../assets/prof.jpg'
const About = () => {
  return (
    <div className='about' id='about'>
      <div className='title'>
        <h1>About Me</h1>
        <img src={theme}></img>
      </div>
      <div className='right-left'>
      <div className='about-left'>
        <img src={profile}></img>
      </div>
      <div className='about-right'>
        <div className='righ1'>
        <p>I am a experienced frontend developer with one year of professional expertise in the field.
            I had the privilege of collaborating with prestigious organizations,contributing to their success and growth.
        </p>
        <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
        </div>
        <div className='skills'>
            <div className='sk'>
            <p>HTML & CSS</p>
            <hr style={{width:'60%'}}></hr>
            </div>
            <div className='sk'>
            <p>React JS</p>
            <hr style={{width:'70%'}}></hr>
            </div>
            <div className='sk'>
            <p>JavaScript</p>
            <hr style={{width:'60%'}}></hr>
            </div>
            <div className='sk'>
            <p>Next JS</p>
            <hr style={{width:'60%'}}></hr>
            </div>
        </div>
      </div>
      </div>
      <div className='achievements'>
        <div className='achieve'>
            <h1>1+</h1>
            <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr></hr>
        <div className='achieve'>
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr></hr>
        <div className='achieve'>
            <h1>5+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
