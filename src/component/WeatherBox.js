import React from 'react'

const WeatherBox = ({weather}) => {
  console.log("weater는?", weather)
    return (
    <div className='weather-box'>
        <h2>{weather ? weather.name : false}</h2>
        <h2>섭씨 {weather ? weather.main.temp : false }C / 화씨 {weather ? weather.main.temp * 1.8 + 32 : false}도</h2>
        <h2>{weather?.weather[0].description}</h2>
    </div>
  )
}

export default WeatherBox