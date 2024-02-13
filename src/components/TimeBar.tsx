import React, { useState, useEffect } from 'react';
import '../styles/App.css'


// Get incremental time offsets from current time
const getNextTime = (offsetMinutes: number): string => {
  const currentDate = new Date();
  currentDate.setMinutes(
    Math.ceil(currentDate.getMinutes() / 30) * 30 + offsetMinutes
  );
  return currentDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
};

// Build TimeBar component
const TimeBar: React.FC = () => {

  // Initialize state
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Define offsets
  const next30: string = getNextTime(0);
  const next60: string = getNextTime(30);
  const next90: string = getNextTime(60);

  // Update clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="timebar">
      <div className="timeDivider">
        <p>{time}</p>
      </div>
      <div className="timeDivider">
        <p>{next30}</p>
      </div>
      <div className="timeDivider">
        <p>{next60}</p>
      </div>
      <div className="timeDivider">
        <p>{next90}</p>
      </div>
    </div>
  );
};

export default TimeBar;