import { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "../weathercard/WeatherCard";
import './WeatherDisplay.css'

const WeatherDisplay = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (city) {
      setLoading(true);
      axios
        .get(`https://api.weatherapi.com/v1/current.json`, {
          params: {
            key: "76f08bfe2db44396ad4150537243101",
            q: city,
          },
        })
        .then((res) => setWeatherData(res.data))
        .catch((error) => {
          console.error("Error fetching data");
          alert("Failed to fetch weather data.");
        })
        .finally(() => setLoading(false));
    }
  }, [city]);

  return <div className="weather-display">
    {loading && <p>Loading data...</p>}
    {!loading && weatherData && (
        <diV className='weather-cards'>
            <WeatherCard title="Temperature" value={`${weatherData.current.temp_c}°C`}>  </WeatherCard>
            <WeatherCard title="Humidity" value={`${weatherData.current.humidity}%`}>  </WeatherCard>
            <WeatherCard title="Condition" value={`${weatherData.current.condition.text}`}>  </WeatherCard>
            <WeatherCard title="Wind Speed" value={`${weatherData.current.wind_kph} kph`}>  </WeatherCard>
        </diV>
    )}
  </div>;
};

export default WeatherDisplay;
