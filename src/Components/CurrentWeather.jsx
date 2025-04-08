
function CurrentWeather() {
  return (
    <div className="weather-section">
        <div className="current-weather">
          <img src="src\assets\clouds.svg"  className="weather-icon" />
          <h2 className="temprature">20 <span>°C</span></h2>
          <p className="description">Partly cloudy</p>
        </div>
    </div>
  )
}

export default CurrentWeather