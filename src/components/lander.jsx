import React from "react";
import "./lander.css"; // Import the CSS file
import MessageDisplay from "./MessageDisplay";

const Lander = () => {
  return (
    <div className="lander-background">
      <div className="lander-container">
        <MessageDisplay
          messageBefore={
            <h3>
              Uh oh! Someone is trying to get into their Christmas gift early!
            </h3>
          }
          codeAfter={
            <React.Fragment>
              <h1>🎄🎄 Merry Christmas! 🎄🎄</h1>
              <h4>
                I'm writing this on 12/15 and I realize it's been more than a
                year to make this video.
              </h4>
              <h3>If you say anything I'll take even longer next time 😅</h3>
              <br />
              <h2>
                12/25 edit: SORRY MIKE AND PATTI FOR MAKING YOU GUYS WAKE UP AT
                4AM
              </h2>
              <br />
              <hr />
              <h4>
                <u>On this trip, I never expected that:</u>
                <ul className="list-centered">
                  <li>We'd get caught in a typhoon 🌪️</li>
                  <li>
                    I would be drunk without being drunk in an izakaya 🐋🦈
                  </li>
                  <li>That we'd find chocolate Jesus 🍫</li>
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
              <h3>Anywho.</h3>
              <h2>
                Merry Christmas you wonderful peoples. <br />
                <br /> This was an amazing, wonderful, chaotic, trip. <br />
                <br />
                And it was all done together with people I love and treasure.
                <br />
                <br />
                I'm very blessed and happy to have you all in my life <br />{" "}
                (although some of you are closer geographically than others)
                <br />
                <br />
                See you on the next trip 👀👀👀👀👀
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
                <iframe
                  src="https://youtube.com/embed/srHhSFc4_Nc"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>
              <h2>
                If the video doesn't load,{" "}
                <a
                  href="https://youtu.be/srHhSFc4_Nc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  click here to open it in a new tab
                </a>
              </h2>
            </React.Fragment>
          }
        />
      </div>
    </div>
  );
};

export default Lander;
