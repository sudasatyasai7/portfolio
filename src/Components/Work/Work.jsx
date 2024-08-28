import React from 'react'
import './Work.css'
import theme from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow from '../../assets/arrow_icon.svg'
const Work = () => {
  return (
    <div className='work' id='work'>
        <div className='work-title'>
            <h1>My Latest Work</h1>
            <img src={theme}></img>
        </div>
        <div className='work-content'>
            {mywork_data.map((wor,index)=>{
                return(
                    <img src={wor.w_img} key={index}></img>
                )
            })}
        </div>
        <div className='show-more'>
            <p>Show More</p>
            <img src={arrow}></img>
        </div>
      
    </div>
  )
}

export default Work
