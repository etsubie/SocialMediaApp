import React from "react";
import ReactDom from "react-dom/client";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";

import reducers from './reducers'
import App from "./App";
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
