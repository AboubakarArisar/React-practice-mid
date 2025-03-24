import { useState, useEffect } from "react";

const sampleText = "The quick brown fox jumps over the lazy dog.";

export default function TypingSpeedChecker() {
  const [text, setText] = useState(sampleText);
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [cps, setCps] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  useEffect(() => {
    if (input.length === 1 && !startTime) {
      setStartTime(Date.now());
    }

    if (input.length > 0) {
      const currentTime = Date.now();
      const timeTaken = (currentTime - startTime) / 1000;
      setCps((input.length / timeTaken).toFixed(2));
    }
  }, [input]);

  const resetTest = () => {
    setInput("");
    setStartTime(null);
    setCps(0);
    setAccuracy(100);
  };

  return (
    <div className='max-w-xl mx-auto mt-10 p-5 border rounded-lg shadow-lg bg-white'>
      <h2 className='text-xl font-bold mb-4'>Typing Speed Checker</h2>
      <p className='mb-4 text-gray-600'>{text}</p>
      <textarea
        className='w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300'
        rows='3'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Start typing here...'
      />
      <div className='mt-4'>
        <p className='text-lg font-semibold'>CPS: {cps}</p>
      </div>
      <button
        onClick={resetTest}
        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
      >
        Restart
      </button>
    </div>
  );
}
