import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import "react-vis/dist/style.css";
import App from "./app/layout/App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootEl
  );
};
if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}
render();
registerServiceWorker();
