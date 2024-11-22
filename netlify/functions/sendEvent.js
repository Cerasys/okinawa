const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

exports.handler = async (event, context) => {
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Invalid JSON input",
        error: error.message,
      }),
    };
  }

  const { event: eventType, value, currency, test_event_code } = body;
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
  const pixelId = process.env.FACEBOOK_PIXEL_ID;

  try {
    const response = await axios.post(
      `https://graph.facebook.com/v11.0/${pixelId}/events`,
      {
        access_token: accessToken,
        event_name: eventType,
        event_time: Math.floor(Date.now() / 1000),
        test_event_code: test_event_code,
        user_data: {
          // Add user data here, e.g., email, phone, etc.
        },
        custom_data: {
          value: value,
          currency: currency,
        },
      }
    );
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Event sent successfully",
        response: response.data,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error sending event",
        error: error.message,
      }),
    };
  }
};
