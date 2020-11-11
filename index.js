import React from "react";
import ReactDOM from "react-dom";
import "./components/App/App.css";
import App from "./components/App/App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import birdApp from "./store/birds/birds";

const store = createStore(birdApp);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
