import React from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Lander from "./components/lander";
import ScrollToAnchor from "./components/util/scroll";
import Yukino from "./components/yukino";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Lander />}></Route>
        <Route exact path="/yukino" element={<Yukino />}></Route>
        <Route path="*" element={<Lander />} />
      </Routes>
    </div>
  );
};

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
