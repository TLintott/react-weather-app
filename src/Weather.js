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
        <div className="row">
          <form className="search-form" id="search-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  id="city-input"
                  placeholder="Enter a city.."
                  className="form-control search-input input-text"
                />
              </div>
              <div className="col-3 p-0">
                <input
                  type="submit"
                  className="btn btn-primary w-100 search-btn"
                  value="Search"
                />
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
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                id="icon"
                className="float-left"
              />
              <strong id="temperature"> </strong>
              <span className="units">
                <a href={weatherData.imgUrl} className="active">
                  {weatherData.temperature} °C
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
    </div>
  );
}
