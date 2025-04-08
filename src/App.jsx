import { useState } from "react";
import SearchSection from "./Components/SearchSection";
import CurrentWeather from "./Components/CurrentWeather";
import HourlyWeather from "./Components/HourlyWeather";

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState({});

  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const temprature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;

      setCurrentWeatherData({ temprature, description });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <SearchSection getWeatherDetails={getWeatherDetails} />
      <CurrentWeather currentWeatherData={currentWeatherData} />
      <div className="hourly-forecast">
        <ul className="weather-list">
          <HourlyWeather />
        </ul>
      </div>
    </div>
  );
}

export default App;
