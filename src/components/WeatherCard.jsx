import { useState } from "react";
import "tailwindcss/tailwind.css";
import { BsMoon } from "react-icons/bs";
import Wheather from "./Wheather.jsx";
const WeatherCard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 "
      }`}
    >
      {/* Dark mode toggle */}
      <div className="absolute top-3 right-3 bg-white/25 shadow-lg backdrop-blur-lg rounded-full p-2 border border-white/18">
        <span className="text-xl cursor-pointer" onClick={toggleDarkMode}>
          <BsMoon />
        </span>
      </div>
      {/* Weather card */}
      <Wheather />
    </div>
  );
};

export default WeatherCard;
