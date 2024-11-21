import React from "react";
import "./bookCall.css"; // Import the CSS file

const BookCall = () => {
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
