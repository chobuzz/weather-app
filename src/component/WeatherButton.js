import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity }) => {
  console.log("Cities?", cities);
  return (
    <div>
      <Button onClick={() => setCity("")} variant="primary" className="button">
        Current Location
      </Button>
      {cities.map((item) => {
        return (
          <Button
            variant="primary"
            onClick={() => setCity(item)}
            className="button"
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
};

export default WeatherButton;
