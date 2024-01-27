import React,{useState} from 'react';
import './App.css';
import Climate from './components/Climate/Climate';


function App() {
  const api={
    key:'b436092d327258eb77ad2c75d3003906',
    base:'https://api.openweathermap.org/data/2.5/'
  }
  
  const [search,setSearch] = useState("");
  const [weather,setWeather] = useState({});
 
  async function handleSearch(){
    const response = await fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`);
    const data = await response.json();
    setWeather(data);
  }

  return (
    <div className="weather-container">
      <h1 className='app-name'>Weather-App</h1>
      
      <div className='input-search'>
        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}placeholder='Enter City or Town...'/>
        <button type='button'onClick={handleSearch}>Search</button>
      </div>
        <Climate weather ={weather}/>  
    </div>
  );
}

export default App;
