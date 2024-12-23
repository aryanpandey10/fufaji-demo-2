import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/flaticon.css";
import "./assets/css/default.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-tabs/style/react-tabs.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
