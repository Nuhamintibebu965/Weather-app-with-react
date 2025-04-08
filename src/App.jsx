import SearchSection from "./Components/SearchSection"
import CurrentWeather from "./Components/CurrentWeather"
import HourlyWeather from "./Components/HourlyWeather"

function App() {
  return (
    <div className='container'>
      <SearchSection />
      <CurrentWeather />
        
        <div className="hourly-forecast">
          <ul className="weather-list">
            <HourlyWeather />
          </ul>
        </div>
      </div>
    
  )
}

export default App
