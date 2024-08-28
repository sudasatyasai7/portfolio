import React from 'react'
import './Service.css'
import theme from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data.js'
import arrow from '../../assets/arrow_icon.svg'
const Services = () => {
  return (
    <div className='service' id='service'>
        <div className='service-title'>
            <h1>My Services</h1>
            <img src={theme}></img>
        </div>
        <div className='service-content'>
            {Services_Data.map((serv,index)=>{
                return(
                    <div key={index} className='inner'>
                        <h3>{serv.s_no}</h3>
                        <h2>{serv.s_name}</h2>
                        <p>{serv.s_desc}</p>
                        <div className='arrow'>
                            <h4>Read More</h4>
                            <img src={arrow}></img>
                        </div>
                    </div>
                )
        })}
        </div>
      
    </div>
  )
}

export default Services
