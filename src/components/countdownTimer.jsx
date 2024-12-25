import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  // Set the target date to 9 PM JST on December 25th, 2024

  const [timeRemaining, setTimeRemaining] = useState(
    targetDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = targetDate - currentTime;
      setTimeRemaining(difference);

      // If the countdown reaches 0, refresh the page
      if (difference <= 0) {
        clearInterval(interval);
        window.location.reload(); // Refresh the page
      }
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
          <h1>
            Countdown to Christmas <s>9 PM JST</s> 9 PM PST, Dec 25th, 2024:
          </h1>
          <h3>screaaaaaaam I know I said JST but I need more timeeeeeee</h3>
          <h3>{`${days}d ${hours}h ${minutes}m ${seconds}s`}</h3>
        </div>
      ) : (
        <h1>It's Christmas! The page will refresh now.</h1>
      )}
    </div>
  );
};

export default CountdownTimer;
