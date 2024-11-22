import React, { useEffect, useMemo } from "react";
import axios from "axios";
import CryptoJS from "crypto-js"; // Import the crypto-js module
import { v4 as uuidv4 } from "uuid"; // Import the uuid library
import "./thankYou.css"; // Import the CSS file
import { useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const hashValue = (value) => {
  return CryptoJS.SHA256(value.trim().toLowerCase()).toString(CryptoJS.enc.Hex);
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
  event,
  value,
  currency,
  userData,
  clientIpAddress,
  eventId,
  eventTime
) => {
  await axios.post("https://lp.hoshinomedia.com/.netlify/functions/sendEvent", {
    event,
    value,
    currency,
    event_source_url: window.location.href,
    client_ip_address: clientIpAddress,
    client_user_agent: navigator.userAgent,
    email: userData.email ? hashValue(userData.email) : null,
    phone: userData.phone ? hashValue(userData.phone) : null,
    event_id: eventId,
    event_time: eventTime, // Add the event time
  });
};

const ThankYou = () => {
  const query = useQuery();

  const userData = useMemo(
    () => ({
      fullName: query.get("invitee_full_name"),
      firstName: query.get("invitee_first_name"),
      lastName: query.get("invitee_last_name"),
      email: query.get("invitee_email"),
      phone: query.get("answer_1"), // Using answer_1 for phone number
    }),
    [query]
  );

  useEffect(() => {
    document.title = "Confirm Your Call via Email";
    const fetchAndSendEvent = async () => {
      const ip = await fetchIPAddress();
      const eventId = uuidv4(); // Generate a unique event ID
      const eventTime = Math.floor(Date.now() / 1000); // Capture event time
      sendEvent("Lead", 0, "USD", userData, ip, eventId, eventTime); // Add Facebook Pixel event with event_id
      if (window.fbq) {
        window.fbq("track", "Lead", {
          value: 0,
          currency: "USD",
          event_id: eventId,
          event_time: eventTime, // Add the event time
        });
      } else {
        setTimeout(() => {
          if (window.fbq) {
            window.fbq("track", "Lead", {
              value: 0,
              currency: "USD",
              event_id: eventId,
              event_time: eventTime, // Add the event time
            });
          }
        }, 100); // Retry after a short delay
      }
    };
    fetchAndSendEvent();
  }, [userData]);

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
