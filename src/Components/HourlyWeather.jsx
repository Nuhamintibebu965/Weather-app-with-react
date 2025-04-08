import React from 'react'

const HourlyWeather = () => {
  return (
    <div>
    <li className="weather-item">
    <p className="time">00:00</p>
    <img src="src\assets\clouds.svg"  className="weather-icon" />
    <p className="temprature">20°</p>
  </li>
  </div>
  )
}

export default HourlyWeather