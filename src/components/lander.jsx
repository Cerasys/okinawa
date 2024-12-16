import React from "react";
import "./lander.css"; // Import the CSS file
import MessageDisplay from "./MessageDisplay";

const Lander = () => {
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
              <h1>Merry Christmas!</h1>
              <h3>Here's a short </h3>

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
