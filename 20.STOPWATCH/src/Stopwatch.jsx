import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);
  const startTimRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimRef.current);
      }, 10);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = () => {
    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let miliseconds = Math.floor((elapsedTime % 1000) / 10);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${miliseconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button
          className="start-btn"
          onClick={() => {
            setIsRunning(true);
            startTimRef.current = Date.now() - elapsedTime;
          }}
        >
          Start
        </button>
        <button className="stop-btn" onClick={() => setIsRunning(false)}>
          Stop
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            setElapsedTime(0);
            setIsRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
