import React, { Component } from "react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./App.css";

import Aurora from "./assets/Aurora";

function App() {
  return (
    <>
      <div>
        <div className="logos">
          <img src="/public/acm.png" alt="ACM Logo" />
          <img
              src="/public/sih.png"
              alt="SIH logo"
            />
        </div>
        <div className="content">
          <h1>Smart India Hackathon 2025</h1>
          <FlipClockCountdown to={new Date("19-sep-2025").getTime()} />
          <div className="img-wrapper">
            <h2>Register Now (Open with University ID)</h2>
            <img
              src="/public/qr.png"
              alt="QR Code"
              style={{ width: "250px" }}
            />
          </div>
        </div>
        <div className="background">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
      </div>
    </>
  );
}

export default App;
