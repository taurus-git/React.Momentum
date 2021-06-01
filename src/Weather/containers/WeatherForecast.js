import React from "react";
import { loadState } from "../../localStorage";
import DashboardApp from "../../Dashboard/containers/Dashboard";
import WeatherDetails from "../components/WeatherDetails";

const WeatherForecast = ({ forecast }) => {

    let getWeatherDetails = source => {
        const persistedState = loadState('city');
        if ((source !== undefined) && source.status === 200){ //data from input
                return forecast.data
            } else if (persistedState !== undefined) { // data from local storage
                return persistedState.city.forecast.data
            } else {
            return {};
        }
    }

    let weather = getWeatherDetails(forecast);

    return(

        <div>
            <DashboardApp forecast={getWeatherDetails(forecast)} />
            {(weather && Object.keys(weather).length !== 0 && weather.constructor === Object)
                &&
            <WeatherDetails forecast={getWeatherDetails(forecast)} />}
        </div>
    )
}

export default WeatherForecast;