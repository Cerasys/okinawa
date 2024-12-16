import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Set the target date and time (9pm JST on Dec 25th, 2024)
  const targetDate = new Date("2024-12-25T21:00:00+09:00").getTime();

  // Set up state to store the remaining time
  const [timeRemaining, setTimeRemaining] = useState(
    targetDate - new Date().getTime()
  );

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = targetDate - currentTime;
      setTimeRemaining(difference);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [targetDate]);

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div>
      {timeRemaining > 0 ? (
        <div>
          <h1>Countdown to 9pm JST, Dec 25th, 2024:</h1>
          <h3>{`${days}d ${hours}h ${minutes}m ${seconds}s`}</h3>
        </div>
      ) : (
        <React.Fragment />
      )}
    </div>
  );
};

export default CountdownTimer;
