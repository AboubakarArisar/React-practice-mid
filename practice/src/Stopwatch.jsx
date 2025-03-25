import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 59) {
          setMinutes((prevMin) => {
            if (prevMin === 59) {
              setHours((prevHour) => prevHour + 1);
              return 0;
            }
            return prevMin + 1;
          });
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startHandler = () => setIsRunning(true);
  const stopHandler = () => setIsRunning(false);
  const resetHandler = () => {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-900 text-white'>
      <h1 className='text-5xl font-bold mb-6'>Stopwatch</h1>
      <div className='text-4xl bg-gray-800 px-10 py-5 rounded-lg shadow-lg'>
        {String(hours).padStart(2, "0")} : {String(minutes).padStart(2, "0")} :{" "}
        {String(seconds).padStart(2, "0")}
      </div>
      <div className='mt-6 space-x-4'>
        <button
          className='px-6 py-2 bg-green-500 rounded-md shadow-md hover:bg-green-600'
          onClick={startHandler}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          className='px-6 py-2 bg-red-500 rounded-md shadow-md hover:bg-red-600'
          onClick={stopHandler}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button
          className='px-6 py-2 bg-yellow-500 rounded-md shadow-md hover:bg-yellow-600'
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
