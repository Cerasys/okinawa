import React, { useEffect } from "react";
import axios from "axios";
import "./thankYou.css"; // Import the CSS file
import { useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const sendEvent = async (event, value, currency, userData) => {
  await axios.post("https://lp.hoshinomedia.com/.netlify/functions/sendEvent", {
    event,
    value,
    currency,
    test_event_code: "TEST18837",
    event_source_url: window.location.href,
    client_ip_address: "", // You can use a service to get the client IP if needed
    client_user_agent: navigator.userAgent,
    email: userData.email,
    phone: userData.phone,
  });
};

const ThankYou = () => {
  const query = useQuery();

  const userData = {
    fullName: query.get("invitee_full_name"),
    firstName: query.get("invitee_first_name"),
    lastName: query.get("invitee_last_name"),
    email: query.get("invitee_email"),
    phone: query.get("answer_1"), // Using answer_1 for phone number
  };

  useEffect(() => {
    document.title = "Confirm Your Call via Email";
    sendEvent("Lead", 0, "USD", userData);
  }, []);

  return (
    <div className="thankyou-background">
      <br />
      <h1 className="warning">
        WARNING {userData.firstName}: Your Call Is NOT Confirmed...
      </h1>
      <h1>
        Step 1: Go To Your Email And <u>REPLY</u>, Then{" "}
        <u>Add The Event To Your Calendar</u>
      </h1>
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/img/mobile-confirm.jpg"
          alt="Confirm Booking"
        />
        <img src="/img/confirmBooking.png" alt="Confirm Booking" />
      </picture>{" "}
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
        We all hate tire kickers. As a courtesy to us, we ask that you reply to
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
            href="https://mail.google.com/mail/u/0/#search/Nathan+Lee"
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
          src="https://player.vimeo.com/video/1029120494" // Replace with your Vimeo video ID
          width="100%"
          height="400px"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Thank You Video"
        ></iframe>
      </div>
      <div className="container">
        <h1>
          Step 4: See How We Took 32 People From $0k/mo To $10k-$40k/mo In 3-12
          Months Using Our System...
        </h1>
        <p></p>
      </div>
      <img
        className="thankyou-image"
        src="/img/successImage.jpg" // Replace with your image path
        alt="Success"
      />
    </div>
  );
};

export default ThankYou;
