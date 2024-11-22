import React, { useEffect } from "react";
import Footer from "./footer";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Import the uuid library
import "./lander.css"; // Import the CSS file

const sendEvent = async (
  event,
  event_source_url,
  client_user_agent,
  event_id,
  event_time
) => {
  await axios.post("https://lp.hoshinomedia.com/.netlify/functions/sendEvent", {
    event,
    event_source_url,
    client_user_agent,
    event_id: event_id,
    event_time: event_time, // Add event_time
  });
};

const Lander = () => {
  useEffect(() => {
    document.title = "Free Video Guide";
  }, []);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const sourceUrl = window.location.href;
    const eventId = uuidv4(); // Generate a unique event ID
    const eventTime = Math.floor(Date.now() / 1000); // Capture event time

    sendEvent("viewedLander", sourceUrl, userAgent, eventId, eventTime);

    const trackFacebookEvent = () => {
      if (window.fbq) {
        // Add Facebook Pixel event with event_id and event_time
        window.fbq("track", "ViewContent", {
          event_name: "viewedLander",
          event_id: eventId,
          event_time: eventTime,
        });
      } else {
        setTimeout(trackFacebookEvent, 100); // Retry after a short delay
      }
    };

    trackFacebookEvent();
  }, []);

  return (
    <div className="lander-background">
      {" "}
      {/* Add a class for the background styles */}
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
          Schedule Your Call Here
          <br />
          <span className="smaller-text"> + Fully Book Your Calendar</span>
        </a>

        <Footer />
      </div>
    </div>
  );
};

export default Lander;
