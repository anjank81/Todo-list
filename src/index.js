import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import todoReducer from "./Reducer/todoReducer";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
const creatStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = creatStoreWithMiddleware(todoReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
