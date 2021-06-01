import React from "react";

const WeatherDetails = ({forecast}) => {

    let cityName = forecast.name;
    let weatherDescr = forecast.weather[0].description;
    let iconcode = forecast.weather[0].icon;
    let iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
    let temp = Math.round(forecast.main.temp);
    let wind = Math.round(forecast.wind.speed)

    return(
        <div className="weather-details">
            <h3>{cityName}</h3>
            <div className="weather-info">
                <div>
                    <img className="weather-icon" src={iconurl} alt="current weather icon"></img>
                </div>
                <div>
                    <p>{temp} °C</p>
                    <p>{wind} m/s</p>
                    <p>{weatherDescr}</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetails;