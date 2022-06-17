import React from "react";
import ReactDOM from "react-dom";
import { Provider, createStore, combineReducers } from "./my-redux";

import "./index.css";
import App from "./App";
import counterReducer from "./CounterStore";

const rootReducer = combineReducers({
  counter: counterReducer
});
const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
