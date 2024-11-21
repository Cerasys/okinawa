import React from "react";

const BookCall = () => {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "20px",
        backgroundImage: "url('/img/whiteGeo.jpg')", // Background image applied here
        backgroundSize: "cover", // Make sure the background image covers the whole container
        backgroundPosition: "center", // Ensure the image is centered
        backgroundRepeat: "no-repeat", // Prevent image from repeating
        backgroundAttachment: "fixed", // This ensures the image stays fixed and doesn't scroll
        minHeight: "100vh", // Ensure the container takes the full viewport height
        minWidth: "100vw", // Ensure the container takes the full viewport width
      }}
    >
      <h1>Book a Call Below</h1>
      <h3>
        DISCLAIMER: This is only for coaches and consultatns that have{" "}
        <u>At Least $30 a Day</u> For Marketing Their Own Business & SERIOUS
        About Getting 5 Client Guaranteed
      </h3>
      <b>⏳ Please give the calendar a few seconds to load ⏳</b>
      <br />
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/nathanblee/growth-blueprint-call?primary_color=ff6f3c"
        style={{
          minWidth: "320px",
          height: "700px",
        }}
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
