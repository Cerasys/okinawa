import React from "react";
import Footer from "./footer";
import "./lander.css"; // Import the CSS file

const Lander = (props) => {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "1100px", // Set max width to 1100px
        margin: "0 auto",
        padding: "20px",
        backgroundImage: "url('/img/whiteGeo.jpg')", // Background image applied here
        backgroundSize: "cover", // Make sure the background image covers the whole container
        backgroundPosition: "center", // Ensure the image is centered
        backgroundRepeat: "no-repeat", // Prevent image from repeating
        backgroundAttachment: "fixed", // This ensures the image stays fixed and doesn't scroll
        minHeight: "100vh", // Ensure the container takes the full viewport height
        minWidth: "100vw", // Ensure the container takes the full viewport width
        fontFamily: "Poppins, sans-serif", // Apply Poppins font
        color: "black", // Set all text color to black
      }}
    >
      {/* Container with max width */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px", // Limit the max width to 1100px
          margin: "0 auto", // Center the content
        }}
      >
        {/* Red Heading with Underlined Second Half */}
        <h3 style={{ color: "#ff6f3c", fontWeight: "700" }}>
          Only for coaches and consultants making above $8k a month{" "}
          <span
            style={{
              textDecoration: "underline",
              textTransform: "uppercase",
            }}
          >
            WITH AT LEAST $30 A DAY
          </span>
        </h3>

        {/* Main Heading */}
        <h1>
          I'll <u>Guarantee</u> you 5 Paying Clients for Your High Ticket
          Coaching Course In 90 days...
        </h1>
        <h3>Click through the slides to see how it works</h3>
        <br />

        {/* Iframe */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px", // Limit the max width of the iframe
            height: "500px", // Fixed height
            margin: "0 auto", // Center the iframe
            overflow: "hidden", // Prevent overflow
          }}
        >
          <iframe
            title="Embedded Canva Design"
            loading="lazy"
            style={{
              width: "100%",
              height: "100%", // Make the iframe take full height of its container
              border: "none", // Remove border
            }}
            src="https://www.canva.com/design/DAGVFBMKpGg/1zBU6335FRMJ69-iP6C9ww/view?embed"
            allowFullScreen
            allow="fullscreen"
          />
        </div>

        {/* New Line Before Button */}
        <h2>
          <b>
            <u>If you have $30/day</u>
          </b>{" "}
          to spend on your <b>CONSULTING</b> or <b>COACHING BUSINESS</b> and
          need more consistent clients, click the button below and book a call
          on the next page:
        </h2>

        {/* Main Button */}
        <a href="/book-a-call">Schedule Your Call Here + Get 5 Clients</a>

        <Footer />
      </div>
    </div>
  );
};

export default Lander;
