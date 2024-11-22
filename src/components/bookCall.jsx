import React, { useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Import the uuid library
import "./bookCall.css"; // Import the CSS file

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

const sendEvent = async (
  event,
  event_source_url,
  client_user_agent,
  event_id,
  event_time,
  clickId,
  browserId,
  externalId
) => {
  await axios.post("https://lp.hoshinomedia.com/.netlify/functions/sendEvent", {
    event,
    event_source_url,
    client_user_agent,
    event_id: event_id,
    event_time: event_time, // Add event_time
    fbc: clickId, // Add click ID
    fbp: browserId, // Add browser ID
    external_id: externalId, // Add external ID
    test_event_code: "TEST18837", // Commented out test_event_code
  });
};

const BookCall = () => {
  useEffect(() => {
    document.title = "Application";
  }, []);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const sourceUrl = window.location.href;
    const eventId = uuidv4(); // Generate a unique event ID
    const eventTime = Math.floor(Date.now() / 1000); // Capture event time
    const clickId = getCookie("_fbc"); // Get Click ID from cookies
    const browserId = getCookie("_fbp"); // Get Browser ID from cookies
    const externalId = uuidv4(); // Generate an external ID, adjust as needed

    sendEvent(
      "viewedBookCall",
      sourceUrl,
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
        });
      } else {
        setTimeout(trackFacebookEvent, 100); // Retry after a short delay
      }
    };

    trackFacebookEvent();
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
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/nathanblee/growth-blueprint-call?primary_color=ff6f3c"
      ></div>

      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </div>
  );
};

export default BookCall;
