import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer, { initialState } from "./reducers";

import "./index.css";
import App from "./App";

const persistentState = localStorage.getItem("reduxStore")
  ? JSON.parse(localStorage.getItem("reduxStore"))
  : initialState;

const store = createStore(
  reducer,
  persistentState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store);
store.subscribe(() =>
  localStorage.setItem("reduxStore", JSON.stringify(store.getState()))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
