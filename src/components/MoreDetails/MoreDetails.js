import React from 'react';
import './MoreDetails.css';
import {hightemp,lowtemp } from '../images.js';

const MoreDetails = ({weather}) => {
  return (
    <div className='sunrise-sunset'>            
      <div className='sub-sunrise-sunset'>
        <img src={hightemp} alt='high-temp-img' />
        <p>Temp: {weather.main.temp_max} °C</p>
      </div>
      <div className='sub-sunrise-sunset'>
        <img src={lowtemp} alt='low-temp-img' />
        <p>Temp: {weather.main.temp_min} °C</p>
      </div>
  </div> 
  )
}

export default MoreDetails