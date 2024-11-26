import React, { useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Import the uuid library
import CryptoJS from "crypto-js"; // Import the crypto-js module
import "./bookCall.css"; // Import the CSS file

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
    test_event_code: "TEST18837", // Your test event code
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

const BookCall = () => {
  useEffect(() => {
    document.title = "Application";

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
        "viewedBookCall",
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
            event_name: "viewedBookCall",
            event_id: eventId,
            event_time: eventTime,
            fbc: clickId,
            fbp: browserId,
            external_id: externalId,
            test_event_code: "TEST18837", // Your test event code
          });
        } else {
          setTimeout(trackFacebookEvent, 100); // Retry after a short delay
        }
      };

      trackFacebookEvent();
    };

    initializeEvent();

    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      // Initialize Calendly widget after script is loaded
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/nathanblee/growth-blueprint-call?primary_color=ff6f3c",
          parentElement: document.querySelector(".calendly-inline-widget"),
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bookcall-background">
      <div className="callout">
        <h1>Book a Call Below</h1>
        <h3>
          DISCLAIMER: This is only for coaches and consultants that have{" "}
          <u>At Least $50 a Day</u> For Marketing Their Own Business & SERIOUS
          About Filling Their Calendar Guaranteed
        </h3>
        <b>⏳ Please give the calendar a few seconds to load ⏳</b>
        <br />
      </div>
      <div className="calendly-inline-widget"></div>
    </div>
  );
};

export default BookCall;
