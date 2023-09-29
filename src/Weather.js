import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    temperature: 17,
    date: "Tuesday 14:35",
    description: "Windy",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    humidity: 88,
    wind: 24
  };

  return (
    <div className="app">
      <div id="weather-app" class="weather-app">
        <div className="row row-search">
          <form className="search-form" id="search-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  id="city-input"
                  placeholder="Enter a city.."
                  className="form-control search-input input-text"
                />
                <input type="submit" className="search-btn" value="Search" />
              </div>
            </div>
          </form>
        </div>

        <div className="overview">
          <h1 id="city">{weatherData.city}</h1>
          <ul>
            <li>
              Last updated: <span> {weatherData.date}</span>
            </li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row row-weather">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                id="icon"
                className="float-left"
              />
              <strong id="temperature">{weatherData.temperature}</strong>
              <span className="units">
                <a href={weatherData.imgUrl} className="active">
                   °C
                </a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity:{" "}
                <span className="humidty"> {weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span className="wind">{weatherData.wind}</span>m/h
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">This Project was created by Tracey Lintott and is Open-sourced on <a href="https://github.com/TLintott/react-weather-app">Github</a> </div>
    </div>
  );
}

