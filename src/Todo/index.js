import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";
import { loadState, saveState } from "../localStorage";
import "./index.css";
import throttle from "lodash/throttle";

const persistedState = loadState('todos');
const store = createStore(rootReducer, persistedState);

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    }, 'todos')
}, 1000))

const Todo = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>)
}

export default Todo;