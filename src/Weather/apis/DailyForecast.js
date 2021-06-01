import axios from "axios";

let DailyForecast = async (city) => {
    const corsProxyServer = 'https://thingproxy.freeboard.io/fetch/';

    let weatherData = await axios.get(
        `${corsProxyServer}https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=b0e3cfcac6b3bb698bc3351ad3e21975`
    )
    return weatherData;
}

export default DailyForecast;