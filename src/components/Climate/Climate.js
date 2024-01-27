import React from 'react';
import './Climate.css';

import TempDetails from '../TempDetails/TempDetails.js';
import MoreDetails from '../MoreDetails/MoreDetails.js';


const Climate = ({weather}) => {
  return (
    <div>
         {
        weather.message === 'city not found'?
        <div className='invalid'>
          <h1>Seems like the location's weather is not available, search for nearest city or town to that location</h1>
        </div>
        :
        ( typeof weather.main !== 'undefined'?
        (
          <div className='climate-details'>
            <div className='location-name'>
              <h1>{weather.name}, {weather.sys.country}</h1>
            </div>
              <div className='climate'>
                <h3>{weather.weather[0].main}</h3>
              </div> 
              <TempDetails weather ={weather}/>
              <MoreDetails weather ={weather}/>
          </div>
        ):(
          ""
        )
        )
      }
    </div>
  )
}

export default Climate