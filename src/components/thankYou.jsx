import React from "react";
import "./thankYou.css"; // Import the CSS file

const ThankYou = () => {
  return (
    <div className="thankyou-background">
      <h1>Thank You for Booking a Call!</h1>
      <h3>
        We're excited to help you grow your coaching / consulting business.
        Please take a moment to watch the video below for next steps.
      </h3>
      <div className="video-container">
        {/* Embed Vimeo video */}
        <iframe
          src="https://player.vimeo.com/video/your_video_id" // Replace with your Vimeo video ID
          width="100%"
          height="400px"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Thank You Video"
        ></iframe>
      </div>
      <h2>Here's Your Next Step</h2>
      <p>
        After watching the video, please make sure to check your email for
        further instructions. We look forward to speaking with you soon!
      </p>

      <img
        className="thankyou-image"
        src="/img/successImage.jpg" // Replace with your image path
        alt="Success"
      />

      <footer>
        <p>Powered by [Your Company Name]</p>
      </footer>
    </div>
  );
};

export default ThankYou;
