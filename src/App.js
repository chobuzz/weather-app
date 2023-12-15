import "./App.css";
import { useEffect, useState } from "react";

function App() {

  useEffect(() => {
    getCurrentLocation()
  },[])

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=> {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재 위치는", lat, lon)
      getWeatherData(lat, lon);
    });

    const getWeatherData = async (lat, lon) => {
      const apiKey = '300ca09e05bb8bb4ed258c211502b6c6';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('network response was not ok');
        }

        const data = await response.json();
        console.log("날씨 정보는", data);
      }catch(error) {
        console.error("날씨 정보를 불러오는 중 오류 발생:", error)
      }
    }

  }

  return <div>hii!!</div>;
}

export default App;
