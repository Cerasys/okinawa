import React from "react";
import CountdownTimer from "./countdownTimer";

const MessageDisplay = ({ messageBefore, codeAfter }) => {
  // Get the current date and time
  const currentDate = new Date();

  // Convert the target date to the local time of the user's browser
  // const targetDate = new Date("2024-12-15T21:43:00-08:00"); // 9pm JST on Dec 25th, 2024
  // const targetDate = new Date("2024-12-25T21:00:00+09:00"); // 9pm JST on Dec 25th, 2024
  const targetDate = new Date("2024-12-25T21:00:00-08:00"); // 9pm PST on Dec 25th, 2024

  // Check if the current date is before or after the target date
  const isBeforeTarget = currentDate < targetDate;

  return (
    <div>
      {isBeforeTarget ? (
        <React.Fragment>
          {messageBefore}
          <CountdownTimer targetDate={targetDate} />{" "}
        </React.Fragment>
      ) : (
        codeAfter
      )}
    </div>
  );
};

export default MessageDisplay;
