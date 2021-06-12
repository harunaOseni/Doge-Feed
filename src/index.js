import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./State Provider/StateProvider";
import reducer, { initialState } from "./State Provider/Reducer";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>,
  document.getElementById("root")
);
