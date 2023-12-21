import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const cities = ["Paris", "New York", "Tokyo", "Mexico City"];

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity(city);
    }
  }, [city]);

  useEffect(() => {}, [city]);

  const getWeatherByCity = async (city) => {
    const apiKey = "300ca09e05bb8bb4ed258c211502b6c6";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    setLoading(true);

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("network response was not ok");
      }

      const data = await response.json();
      console.log("도시의 날씨정보는", data);
      setLoading(false);
      setWeather(data);
    } catch (error) {
      console.log("날씨 정보를 불러오는 중 오류 발생:", error);
    }
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재 위치는", lat, lon);
      getWeatherData(lat, lon);
    });
  };

  const getWeatherData = async (lat, lon) => {
    const apiKey = "300ca09e05bb8bb4ed258c211502b6c6";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    setLoading(true);

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("network response was not ok");
      }

      const data = await response.json();
      console.log("날씨 정보는", data);
      setLoading(false);
      setWeather(data);
    } catch (error) {
      console.error("날씨 정보를 불러오는 중 오류 발생:", error);
    }
  };

  return (
    <div>
      <div className="container">
        {loading ? (
          <ClipLoader
            color="#000000"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <div className="container">
            <WeatherBox weather={weather} />
            <WeatherButton cities={cities} setCity={setCity} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
