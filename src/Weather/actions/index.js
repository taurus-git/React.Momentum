import C from "../constants/constatnts";
import DailyForecast from "../apis/DailyForecast";

export const addCity = name => ({
    type: C.ADD_CITY,
    name
})

export const deleteCity = () => ({
    type: C.DELETE_CITY
})

/*export const addForecast = forecast => ({
    type: C.ADD_FORECAST,
    forecast: forecast + 2
})*/

export const addForecast = cityName => async dispatch => {
    const forecast = await DailyForecast(cityName)

    dispatch({
        type: C.ADD_FORECAST,
        forecast
    })
}

