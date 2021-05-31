import React from "react";
import { loadState } from "../../localStorage";
import DashboardApp from "../../Dashboard/Dashboard";

const WeatherForecast = ({ forecast }) => {

    let getWeatherDetails = source => {
        const persistedState = loadState('city');
        if ((source !== undefined) && source.status === 200){ //data from input
                console.log(forecast)
                return forecast.data
            } else if (persistedState !== undefined) { // data from local storage
                return persistedState.city.forecast.data
            } else {
            return {};
        }
    }

    return(
        <div>
            <DashboardApp forecast={getWeatherDetails(forecast)} />
        </div>
    )
}

export default WeatherForecast;