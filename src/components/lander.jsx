import React, { useEffect } from "react";
import Footer from "./footer";
import "./lander.css"; // Import the CSS file

const Lander = () => {
  useEffect(() => {
    document.title = "Free Video Guide";
  }, []);

  return (
    <div
      className="lander-background" // Add a class for the background styles
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <h3 style={{ color: "#ff6f3c", fontWeight: "700" }}>
          Only for coaches and consultants making above $10k a month{" "}
          <span
            style={{
              textDecoration: "underline",
              textTransform: "uppercase",
            }}
          >
            WITH AT LEAST $30 A DAY
          </span>
        </h3>

        <h1>
          I'll <u>Guarantee</u> you fill your calendar with 20 Leads for Your
          High Ticket Coaching Course In the next 30 days...
        </h1>
        <h3>Click through the slides to see how it works</h3>
        <br />

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

        <h2>
          <b>
            <u>If you have $50/day</u>
          </b>{" "}
          to spend on your <b>CONSULTING</b> or <b>COACHING BUSINESS</b> and
          need more consistent clients, click the button below and book a call
          on the next page:
        </h2>

        <a href="/book-a-call" className="lander-button">
          Schedule Your Call Here + Fully Book Your Calendar
        </a>

        <Footer />
      </div>
    </div>
  );
};

export default Lander;
