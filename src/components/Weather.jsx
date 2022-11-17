import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { TiWeatherCloudy } from "react-icons/ti";

export default function Weather() {
  const options = {
    method: "GET",
    url: `https://api.open-meteo.com/v1/forecast?latitude=44.80&longitude=20.47&hourly=temperature_2m&current_weather=true`,
  };
  const [weatherData, setWeatherData] = useState({
    temp: "",
    time: "",
  });
  useEffect(() => {
    if (weatherData.temp == "") {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setWeatherData({
            temp:
              response.data.current_weather.temperature +
              response.data.hourly_units.temperature_2m,
            time: response.data.current_weather.time,
          });
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  });

  return (
    <>
      {weatherData.temp == "" ? (
        <></>
      ) : (
        <div className="nav-item">
          {weatherData.temp} <TiWeatherCloudy /> {weatherData.time}
        </div>
      )}
    </>
  );
}
