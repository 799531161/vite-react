import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./styles/normalize.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
// console.log(App);

ReactDOM.render(
  // <React.StrictMode>
  <HashRouter>
    <Suspense fallback={<div>loading...</div>}>
      <App />
    </Suspense>
  </HashRouter>,

  // </React.StrictMode>,
  document.getElementById("root")
);
