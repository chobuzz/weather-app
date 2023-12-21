import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, selectedCity }) => {
  return (
    <div>
      <Button
        onClick={() => {
          setCity("");
        }}
        variant={`${selectedCity == "" ? "primary" : "outline-primary"}`}
        className="button"
      >
        Current Location
      </Button>
      {cities.map((item) => {
        return (
          <Button
            variant={`${selectedCity == item ? "primary" : "outline-primary"}`}
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
