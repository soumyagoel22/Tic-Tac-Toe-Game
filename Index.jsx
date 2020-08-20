import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  rootElement
);
