import React, { useEffect } from "react";
import "./yukino.css"; // Import the CSS file
import MessageDisplay from "./MessageDisplay";

const Yukino = () => {
  useEffect(() => {
    document.title = "A special gift to my special girl ;)";
  }, []);

  return (
    <div className="lander-background">
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <MessageDisplay
          codeAfter={
            <React.Fragment>
              <h1>Hey babe, Merry Christmas!</h1>
              <h3>Wish I could be with you in person. </h3>
              <h3> But I guess you get Jessica instead 😂</h3>
              <h4>
                I'm writing this on 12/15 as we're talking about timeline and
                hairstyles and how dating is hard
              </h4>
              <h4>
                It's been kind of a crazy 2 months with lots of change and
                emotions and ideas and time flexibility
              </h4>
              <br />
              <h4>
                <u>Two months ago I never thought I'd:</u>
                <ul className="list-centered">
                  <li>Be so happy in a relationship 🫠</li>
                  <li>Sleep so late 😴</li>
                  <li>Have a virtual girlfriend lol 🛜</li>
                  <li>Be compared to Matt Li and Eric 😵</li>
                  <li>Have a best friend in Tokyo 🗼</li>
                  <li>
                    Have so much fun trying to understand a person's story and
                    wiring 🤓
                  </li>
                  <li>Grow up so fast 👁️👄👁️</li>
                  <li>Learn how much God delights in me through you ✨✨</li>
                  <li>
                    Think about buying fried chicken on Christmas to be like all
                    the Japanese people 🍗🍗
                  </li>
                </ul>
              </h4>
              <br />
              <br />
              <h3>Anywho.</h3>
              <h2>
                Merry Christmas. Miss you a ton, and hope to see you in
                <br />
                <s>February</s> <br /> uhh <br /> <s>March</s> uhhhhhhhh <br />
                <br /> i dunno some time in the next few months haha
              </h2>
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
                />
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

export default Yukino;
