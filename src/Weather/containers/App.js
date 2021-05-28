import React from "react";
import AddCity from "../components/AddCity";
import AddForecast from "./AddForecast";

const App = () => {
    return(
        /*<div className='forecast-wrapper'>*/
        <div>
            <AddCity />
            <AddForecast />
        </div>
    )
}

export default App;