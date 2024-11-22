import axios from "axios";
import CryptoJS from "crypto-js"; // Import the crypto-js module

const hashValue = (value) => {
  return CryptoJS.SHA256(value.trim().toLowerCase()).toString(CryptoJS.enc.Hex);
};

export const sendEvent = async (
  event_name,
  value,
  currency,
  userData,
  client_ip_address,
  client_user_agent,
  event_id,
  event_time,
  fbc,
  fbp,
  external_id
) => {
  const payload = {
    event: event_name,
    value: value,
    currency: currency,
    event_id: event_id,
    event_source_url: window.location.href,
    client_ip_address: client_ip_address,
    client_user_agent: client_user_agent,
    email: userData.email ? hashValue(userData.email) : null,
    phone: userData.phone ? hashValue(userData.phone) : null,
    event_time: event_time,
    fbc: fbc,
    fbp: fbp,
    external_id: external_id,
  };

  await axios.post("/.netlify/functions/sendEvent", payload);
};
