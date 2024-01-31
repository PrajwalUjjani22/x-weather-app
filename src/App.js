import './App.css';
import { useState } from 'react';
import SearchBar from './SearchBar/Searchbar';
import WeatherDisplay from './weatherDisplay/WeatherDisplay';



function App() {

  const[city, setCity] = useState("")

  const handleSearch = (searchCity) => {
    setCity(searchCity)
  }

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch}/>
      <WeatherDisplay city={city}/>
    </div>
  );
}

export default App;
