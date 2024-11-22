import React, { useEffect } from "react";
import "./thankYou.css"; // Import the CSS file

const ThankYou = () => {
  useEffect(() => {
    document.title = "Confirm Your Call via Email";
  }, []);

  return (
    <div className="thankyou-background">
      <br />
      <h1 className="warning">WARNING: Your Call Is NOT Confirmed...</h1>
      <h1>
        Step 1: Go To Your Email And <u>REPLY</u>, Then{" "}
        <u>Add The Event To Your Calendar</u>
      </h1>
      TODO: ADD MOBILE IMAGE
      <img src="/img/confirmBooking.png" />
      <br />
      <a
        href="https://mail.google.com/mail/u/0/#search/Nathan+Lee"
        className="lander-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Gmail to Confirm My Call (Reply to the Email)
      </a>
      <p>
        We all hate tire kickers. As a curtesy to us, we ask that you reply to
        the email right away. Unconfirmed calls will be cancelled and your IP
        address will be automatically banned from booking again.
      </p>
      <div className="container">
        <div className="text-section">
          <h1>Step 2: Check Your Inbox & Reply To Email</h1>
          <p>
            Yes, it's that important that we've said it twice. I've sent you an
            email and SMS message.
          </p>
          <p>
            <u>
              You MUST REPLY to the EMAIL to confirm your call, or it will get
              cancelled and your IP address will be automatically blocked.
            </u>
          </p>
        </div>
        <div className="button-section">
          <a
            href="https://mail.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="email-button"
          >
            Gmail
          </a>
          <a
            href="https://mail.yahoo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="email-button"
          >
            Yahoo
          </a>
          <a
            href="https://outlook.live.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="email-button"
          >
            Outlook
          </a>
        </div>
      </div>
      <h1>Step 3: Watch This To CONFIRM Your Call (Or It Will Be CANCELLED)</h1>
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
    </div>
  );
};

export default ThankYou;
