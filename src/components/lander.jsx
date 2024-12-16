import React from "react";
import "./lander.css"; // Import the CSS file
import MessageDisplay from "./MessageDisplay";

const Lander = () => {
  return (
    <div className="lander-background">
      <div className="lander-container">
        <MessageDisplay
          codeAfter={
            <React.Fragment>
              <h1>Merry Christmas!</h1>
              <h4>
                I'm writing this on 12/15 and I realize it's been more than a
                year to make this video.
              </h4>
              <h3>If you say anything I'll take even longer next time 😅</h3>
              <br />
              <hr />
              <h4>
                <u>I never expected that on this trip:</u>
                <ul className="list-centered">
                  <li>We'd get caught in a typhoon 🌪️</li>
                  <li>We'd see a whale shark 🐋🦈</li>
                  <li>That we found chocolate Jesus 🍫</li>
                  <li>That I would drink so much beer with Hiroaki 🫠</li>
                  <li>
                    I'd wear my Orion Beer shirt religiously for the next year
                    and half 👕
                  </li>
                  <li>Big big Shisa 🐺</li>
                  <li>
                    That Mike would take so many selfies (although I really
                    should have) 🤳
                  </li>
                </ul>
              </h4>
              <hr />
              <h2>
                Merry Christmas. <br /> This was an amazing, wonderful, chaotic,
                trip. <br />
                <br />
                And it was all done with you guys, people I love and treasure.
                <br />
                <br />
                So happy to have you all in my life (although some of you are
                closer geographically than others)
                <br />
                <br />
                See you on the next one 👀👀👀👀👀
              </h2>
              <br />
              <h1>⬇️⬇️ E n j o y ⬇️⬇️</h1>
              <div
                style={{
                  width: "100%",
                  maxWidth: "1200px",
                  height: "500px",
                  margin: "0 auto",
                  overflow: "hidden",
                }}
              >
                {/* <iframe
                  title="Embedded Canva Design"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                  src="https://www.canva.com/design/DAGVFBMKpGg/1zBU6335FRMJ69-iP6C9ww/view?embed"
                  allowFullScreen
                  allow="fullscreen"
                /> */}
              </div>
              <p>
                If the video doesn't load,{" "}
                <a href="video_link" target="_blank" rel="noopener noreferrer">
                  click here to open it in a new tab
                </a>
              </p>
            </React.Fragment>
          }
        />
      </div>
    </div>
  );
};

export default Lander;
