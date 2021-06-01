import React from 'react';
import DashboardApp from "./Dashboard/Dashboard";
import ClockApp from "./Clock/Clock";
import WeatherApp from "./Weather"
import TodoList from "./Todo";
import './App.css';

function App () {
    return (
        <>
            <ClockApp />
            <WeatherApp />
            <TodoList />
        </>
    );
}

export default App;