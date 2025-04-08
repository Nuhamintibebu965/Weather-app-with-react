function CurrentWeather({ currentWeatherData }) {
  return (
    <div className="weather-section">
      <div className="current-weather">
        <img src="src/assets/clouds.svg" className="weather-icon" />
        <h2 className="temprature">
          {currentWeatherData.temprature}
          <span>°C</span>
        </h2>
        <p className="description">{currentWeatherData.description}</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
