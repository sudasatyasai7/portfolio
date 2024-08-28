import { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logosai.jpg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {
  const[under,setUnder]=useState("home")
  return (
    <div className='Navbar' id='Navb'>
        <img className='log'src={logo} alt=''/>
        <ul>
            <li><AnchorLink className='anchor' href='#Navb'><p onClick={()=>setUnder("Home")}>Home</p></AnchorLink>{under==="Home"?<img src={underline}></img>:<></>}</li>
            <li><AnchorLink className='anchor' offset={50} href='#about'><p onClick={()=>setUnder("About Me")}>About Me</p></AnchorLink>{under==="About Me"?<img src={underline}></img>:<></>}</li>
            <li><AnchorLink className='anchor' offset={50} href='#service'><p onClick={()=>setUnder("Services")}>Services</p></AnchorLink>{under==="Services"?<img src={underline}></img>:<></>}</li>
            <li><AnchorLink className='anchor' offset={50} href='#work'><p onClick={()=>setUnder("Portfolio")}>Portfolio</p></AnchorLink>{under==="Portfolio"?<img src={underline}></img>:<></>}</li>
            <li><AnchorLink className='anchor' offset={50} href='#contact'><p onClick={()=>setUnder("Contact")}>Contact</p></AnchorLink>{under==="Contact"?<img src={underline}></img>:<></>}</li>
         </ul>
        <div className='connect'>
            <AnchorLink className='anchor' offset={50} href='#contact'><p>Connect With Me</p></AnchorLink>
        </div>
      
    </div>
  )
}

export default Navbar
