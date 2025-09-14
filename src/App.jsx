import { useState } from "react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./App.css";

import Aurora from "./assets/Aurora";
import Ballpit from "./assets/Ballpit";

import acmImg from "./assets/acm.png";
import sihImg from "./assets/sih.png";
import qrImg from "./assets/qr.png";

function App() {
  const [balloon, setBalloon] = useState(false);
  return (
    <>
      <div>
        <div className="logos">
          <img src={acmImg} alt="ACM Logo" />
          <img src={sihImg} alt="SIH logo" />
        </div>
        <div className="content">
          <h1>Smart India Hackathon 2025</h1>
          <FlipClockCountdown to={new Date("19-sep-2025").getTime()} />
          <div className="img-wrapper">
            <h2>Register Now (Open with University ID)</h2>
            <img src={qrImg} alt="QR Code" style={{ width: "250px" }} />
          </div>
        </div>
        <div className="background">
          {balloon ? (
            <Ballpit
              count={100}
              gravity={0.8}
              friction={1}
              wallBounce={0.8}
              followCursor={false}
              colors={["#3A29FF", "#FF94B4", "#FF3232"]}
            />
          ) : (
            <Aurora
              colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
              blend={0.5}
              amplitude={1.0}
              speed={0.5}
            />
          )}
        </div>
        <div className="toggle">
          <div class="checkbox-wrapper-25">
            <input
              type="checkbox"
              checked={balloon}
              onChange={(e) => {
                setBalloon(e.currentTarget.checked);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
