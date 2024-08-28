import React from 'react'
import './footer.css'
import logo from '../../assets/footer_logo.svg'
import person from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
     <div className='front'>
      <div className='tag'>
        <img src={logo}></img>
        <p>I,m a frontend developer from India with 1 year of experience as a frelancer.</p>
      </div>
      <div className='email-submit'>
            <div className='ml'>
            <img src={person}></img>
            <input type='email' placeholder='Enter Your Email'></input>
            </div>
            <div className='subs'>
            <p>Subscribe</p>
            </div>
      </div>
     </div>
      <hr></hr>
      <div className='footer-left'>
        <div className='sam'>
        <p>All rights reserved</p>
        </div>
        <div className='footer-right'>
            <p>Term of services</p>
            <p>Privacy Policy</p>
            <p>Connect With me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
