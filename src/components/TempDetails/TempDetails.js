import React from 'react'
import './TempDetails.css';

import {realfeel,humidity,wind} from '../images.js';



const TempDetails = ({weather}) => {
  const icon = weather.weather[0].icon;

  const image = `https://openweathermap.org/img/wn/${icon}@2x.png`;

 

  return (
    <div className='temp-details'>
    <div className='climate-img'>
      <img src={image} alt='climate-img' />
    </div> 
    <div className='actual-temp'>
      <h2>{weather.main.temp}°C</h2>
    </div>
    <div className='temp-info'>
      <div className='temp-info-item'>
        <img src={realfeel} alt='real feel icon'/>
        <h3>  Real feel: {weather.main.feels_like}°</h3>
      </div>
      <div className='temp-info-item'>
        <img src={humidity} alt="humidity"/>
        <h3>Humidity: {weather.main.humidity}%</h3>
      </div>
      <div className='temp-info-item'>
        <img src={wind} alt="windicon"/> 
        <h3> Wind: {weather.wind.speed} m/sec</h3>
      </div>
    </div>           
  </div>  
  )
}

export default TempDetails