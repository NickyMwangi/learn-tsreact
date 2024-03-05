import { useEffect, useRef, useState } from "react";

export function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elaspedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning && intervalIdRef != null) {
      intervalIdRef.current = window.setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elaspedTime;
  };
  const stop = () => {
    setIsRunning(false);
  };
  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };
  const formatTime = () => {
    let hours = Math.floor(elaspedTime / (1000 * 60 * 60)).toString();
    let minutes = Math.floor(elaspedTime / (1000 * 60) / 60).toString();
    let seconds = Math.floor((elaspedTime / 1000) % 60).toString();
    let milliseconds = Math.floor((elaspedTime % 1000) * 10).toString();

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };
  return (
    <>
      <div className="color-picker-container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
        <div className="controls">
          <button className="add-button" onClick={start}>
            start
          </button>
          <button className="up-btn" onClick={reset}>
            reset
          </button>
          <button className="delete-btn" onClick={stop}>
            stop
          </button>
        </div>
      </div>
    </>
  );
}
