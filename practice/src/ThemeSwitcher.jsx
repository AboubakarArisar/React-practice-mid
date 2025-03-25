import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      className={`w-full h-screen flex flex-col justify-center items-center ${
        currentTheme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className='text-2xl font-bold'>Current Theme: {currentTheme}</h1>
      <button
        onClick={toggleTheme}
        className='mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700 transition duration-300 cursor-pointer'
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
