import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import App from "./containers/App"
import './containers/Weather.css'
import throttle from "lodash/throttle";
import { loadState, saveState } from "../localStorage";

//const persistedState = loadState('weather')

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(throttle(() => {
    saveState({
        city: store.getState().city
    }, 'city')
}, 1000))

const Index= () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default Index;