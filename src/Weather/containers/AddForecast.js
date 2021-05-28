import { connect } from "react-redux";
import WeatherForecast from "./WeatherForecast";

const mapStateToProps = state => ({
    forecast: state.city.forecast,
})

export default connect(
    mapStateToProps
)(WeatherForecast);
