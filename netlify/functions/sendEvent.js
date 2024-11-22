const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

exports.handler = async (event, context) => {
  console.log("Event:", event);

  let body;
  try {
    body = JSON.parse(event.body);
    console.log("Parsed Body:", body);
  } catch (error) {
    console.log("JSON Parsing Error:", error);
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Invalid JSON input",
        error: error.message,
      }),
    };
  }

  const {
    event: eventType,
    value,
    currency,
    test_event_code,
    event_id,
    event_source_url,
    client_ip_address,
    client_user_agent,
    email,
    phone,
    fbc,
    fbp,
    external_id,
  } = body;

  console.log("Event Type:", eventType);
  console.log("Value:", value);
  console.log("Currency:", currency);
  console.log("Test Event Code:", test_event_code);
  console.log("Event ID:", event_id);
  console.log("Event Source URL:", event_source_url);
  console.log("Client IP Address:", client_ip_address);
  console.log("Client User Agent:", client_user_agent);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("FBC:", fbc);
  console.log("FBP:", fbp);
  console.log("External ID:", external_id);

  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
  const pixelId = process.env.FACEBOOK_PIXEL_ID;

  const eventData = {
    event_name: eventType,
    event_time: Math.floor(Date.now() / 1000),
    action_source: "website",
    event_source_url: event_source_url,
    user_data: {
      em: email ? [email] : [],
      ph: phone ? [phone] : [],
      fbc: fbc || null,
      fbp: fbp || null,
      external_id: external_id ? [external_id] : [],
      client_ip_address: client_ip_address || null,
      client_user_agent: client_user_agent || null,
    },
    custom_data: {
      currency: currency,
      value: value,
    },
  };

  try {
    const url = `https://graph.facebook.com/v11.0/${pixelId}/events`;
    const payload = {
      access_token: accessToken,
      data: [eventData],
    };

    if (test_event_code) {
      payload.test_event_code = test_event_code;
    }

    const response = await axios.post(url, payload);
    console.log("Response:", response.data);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Event sent successfully",
        response: response.data,
      }),
    };
  } catch (error) {
    console.log(
      "Error sending event:",
      error.response ? error.response.data : error.message
    );
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error sending event",
        error: error.response ? error.response.data : error.message,
      }),
    };
  }
};
