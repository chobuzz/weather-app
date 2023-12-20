import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div>
        <Button onClick={getWeather()} variant="primary">Current Location</Button>{' '}
        <Button variant="primary">Paris</Button>{' '}
        <Button variant="primary">Tokyo</Button>{' '}
        <Button variant="primary">New york</Button>{' '}
        <Button variant="primary">Rusia</Button>{' '}
    </div>
  )
}

export default WeatherButton