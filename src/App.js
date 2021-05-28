import React from 'react';
import DashboardApp from "./Dashboard/Dashboard";
import ClockApp from "./Clock/Clock";
import WeatherApp from "./Weather"
import './App.css';

function App () {
    return (
        <>
            <ClockApp />
            <WeatherApp />
        </>
    );
}

export default App;