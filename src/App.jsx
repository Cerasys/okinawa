import React from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Lander from "./components/lander";
import ScrollToAnchor from "./components/util/scroll";
import { Privacy } from "./components/privacy";
import { Terms } from "./components/terms";
import BookCall from "./components/bookCall";
import ThankYou from "./components/thankYou";
import { EarningsDisclaimer } from "./components/earningsDisclaimer";

// import ReactPixel from "react-facebook-pixel";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  // useEffect(() => {
  //   const options = {
  //     autoConfig: true, // set pixel's autoConfig
  //     debug: false, // enable logs
  //   };
  //   ReactPixel.init("544708918525106", options);
  // }, []);

  return (
    <div>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Lander />}></Route>
        <Route exact path="/book-a-call" element={<BookCall />}></Route>
        <Route exact path="/thank-you" element={<ThankYou />}></Route>

        <Route exact path="/privacy" element={<Privacy />}></Route>
        <Route exact path="/terms" element={<Terms />}></Route>
        <Route exact path="/earnings" element={<EarningsDisclaimer />}></Route>

        {/* Catch-all route */}
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
