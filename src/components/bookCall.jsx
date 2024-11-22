import React, { useEffect } from "react";
import axios from "axios";
import "./bookCall.css"; // Import the CSS file

const sendEvent = async (event, event_source_url, client_user_agent) => {
  await axios.post("https://lp.hoshinomedia.com/.netlify/functions/sendEvent", {
    event,
    event_source_url,
    client_user_agent,
    test_event_code: "TEST18837",
  });
};

const BookCall = () => {
  useEffect(() => {
    document.title = "Application";
  }, []);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const sourceUrl = window.location.href;
    sendEvent("viewedBookCall", sourceUrl, userAgent);
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
