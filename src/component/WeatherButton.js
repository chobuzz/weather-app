import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities}) => {
  console.log("Cities?", cities)
  return (
    <div>
        <Button variant="primary">Current Location</Button>
        {cities.map((city) => {
          return <Button variant="primary">{city}</Button>
        })}
    </div>
  )
}

export default WeatherButton