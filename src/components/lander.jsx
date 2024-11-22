import React, { useEffect } from "react";
import Footer from "./footer";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Import the uuid library
import CryptoJS from "crypto-js"; // Import the crypto-js module
import "./lander.css"; // Import the CSS file

const hashValue = (value) => {
  return CryptoJS.SHA256(value.trim().toLowerCase()).toString(CryptoJS.enc.Hex);
};

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

const fetchIPAddress = async () => {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    return response.data.ip;
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return "";
  }
};

const sendEvent = async (
  event_name,
  value,
  currency,
  userData,
  client_ip_address,
  client_user_agent,
  event_id,
  event_time,
  fbc,
  fbp,
  external_id
) => {
  const payload = {
    event: event_name,
    value: value,
    currency: currency,
    event_id: event_id,
    event_source_url: window.location.href,
    client_ip_address: client_ip_address,
    client_user_agent: client_user_agent,
    email: userData.email ? hashValue(userData.email) : null,
    phone: userData.phone ? hashValue(userData.phone) : null,
    event_time: event_time,
    fbc: fbc,
    fbp: fbp,
    external_id: external_id,
    // test_event_code: "TEST18837", // Commented out test_event_code
  };

  try {
    await axios.post(
      "https://lp.hoshinomedia.com/.netlify/functions/sendEvent",
      JSON.stringify(payload) // Ensure the payload is properly stringified
    );
  } catch (error) {
    console.error("Error sending event:", error);
  }
};

const Lander = () => {
  useEffect(() => {
    document.title = "Free Video Guide";
  }, []);

  useEffect(() => {
    const initializeEvent = async () => {
      const userAgent = navigator.userAgent;
      const eventId = uuidv4(); // Generate a unique event ID
      const eventTime = Math.floor(Date.now() / 1000); // Capture event time
      const clickId = getCookie("_fbc"); // Get Click ID from cookies
      const browserId = getCookie("_fbp"); // Get Browser ID from cookies
      const externalId = uuidv4(); // Generate an external ID, adjust as needed

      const ip = await fetchIPAddress();
      const userData = { email: null, phone: null }; // You may need to pass actual user data here

      sendEvent(
        "viewedLander",
        0,
        "USD",
        userData,
        ip,
        userAgent,
        eventId,
        eventTime,
        clickId,
        browserId,
        externalId
      );

      const trackFacebookEvent = () => {
        if (window.fbq) {
          // Add Facebook Pixel event with event_id and event_time
          window.fbq("track", "ViewContent", {
            event_name: "viewedLander",
            event_id: eventId,
            event_time: eventTime,
            fbc: clickId,
            fbp: browserId,
            external_id: externalId,
            // test_event_code: "TEST18837", // Commented out test_event_code
          });
        } else {
          setTimeout(trackFacebookEvent, 100); // Retry after a short delay
        }
      };

      trackFacebookEvent();
    };

    initializeEvent();
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
            WITH AT LEAST $50 A DAY
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
