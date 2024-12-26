import React, { useEffect } from "react";
import "./yukino.css"; // Import the CSS file
import MessageDisplay from "./MessageDisplay";

const Yukino = () => {
  useEffect(() => {
    document.title = "A special gift";
  }, []);

  return (
    <div className="lander-background">
      <div className="lander-container">
        <MessageDisplay
          messageBefore={<h3>Dang it Yukino be patient</h3>}
          codeAfter={
            <React.Fragment>
              <h1>🎄🎄 Hey babe, Merry Christmas! 🎄🎄</h1>
              <h5>
                P.S., the main video is hosted at okinawa.nathanblee.com but
                this is a special page just for you 😜
              </h5>
              <h3>Wish I could be with you in person. </h3>
              <h3> But I guess you get Jessica instead 😂</h3>
              <hr />
              <h4>
                I'm writing this on 12/15 as we're talking about timeline and
                hairstyles and how dating is hard
              </h4>
              <h4>
                It's been kind of a crazy 2 months with lots of change and
                emotions and ideas and time flexibility
              </h4>
              <hr /> <br />
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
                  <li>12/25 edit: that you're one stressed out puppy 🐶</li>
                  <li>
                    Think about buying fried chicken on Christmas to be like all
                    the Japanese people 🍗🍗
                  </li>
                </ul>
              </h4>
              <hr />
              <br />
              <br />
              <h3>Anywho.</h3>
              <h2>
                Merry Christmas. <br />
                You have been the most disruptive thing in my life, in a lot of
                good, beautiful, hard ways. <br />
                <br />
                <br />
                Let's have more fun and dumb conversations in the new year
                <br />
                <br /> Miss you and hope to see you in
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
                  src="https://youtube.com/embed/srHhSFc4_Nc"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>
              <p>
                If the video doesn't load,{" "}
                <a
                  href="https://youtu.be/srHhSFc4_Nc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
