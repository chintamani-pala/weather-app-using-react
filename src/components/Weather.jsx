import { useEffect, useState } from "react";
import getUserLocationWithWeather, { getUserLocationWithWeatherLocation } from "../hooks/useWeather";
import { BsThermometerHalf, BsDropletHalf, BsMap } from "react-icons/bs";
import Shimmer from "./Shimmer"; // Ensure you import the Shimmer component

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await getUserLocationWithWeather();
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        setError("Unable to fetch weather data");
        setLoading(false);
      }
    };
    getWeatherData();
  }, []);

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      setLoading(true);
      setError(null);
      try {
        const data = await getUserLocationWithWeatherLocation(searchQuery);
        if (!data || data.cod === "404") {
          setError("City Not Found");
          setWeatherData(null);
        } else {
          setWeatherData(data);
        }
      } catch (err) {
        setError("Unable to fetch weather data");
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) {
    return <Shimmer />;
  }

  const iconUrl = `http://openweathermap.org/img/wn/${
    weatherData?.weather[0]?.icon || "haze"
  }@2x.png`;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white dark:bg-gray-800 shadow-lg backdrop-blur-lg rounded-lg border border-white/18 p-5 w-96 relative z-10">
        <header className="text-2xl font-medium text-blue-800 dark:text-white flex items-center border-b border-gray-300 pb-4">
          <BsMap className="mr-2 text-xl cursor-pointer" />
          Weather App
        </header>
        <div className="flex mt-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 p-2 rounded-l-md border border-gray-300 dark:bg-gray-700 dark:text-white"
            placeholder="Search city..."
          />
          <button
            onClick={handleSearch}
            className="p-2 bg-blue-500 text-white rounded-r-md"
          >
            Search
          </button>
        </div>
        {error ? (
          <div className="mt-4 text-red-500 text-center">{error}</div>
        ) : (
          <section className="weather-part flex flex-col items-center mt-7">
            <img
              id="wicon"
              src={iconUrl}
              alt="Weather Icon"
              className="max-w-[125px] mb-4"
            />
            <div className="temp flex items-center font-medium text-[72px] text-gray-300 dark:text-white">
              <span className="numb font-semibold">
                {Math.trunc(weatherData?.main?.temp) || "0"}
              </span>
              <span className="deg text-4xl mt-2 ml-1">°C</span>
            </div>
            <div className="weather text-xl text-center mb-4 text-gray-300">
              {weatherData?.weather[0]?.description || ""}
            </div>
            <div className="location text-gray-300 dark:text-white flex items-center text-lg text-center mb-7">
              <BsMap className="mr-2 text-2xl" />
              <span>{weatherData?.name || ""}</span>
            </div>
            <div className="bottom-details flex w-full justify-between border-t border-gray-300 pt-4">
              <div className="column feels flex items-center justify-center w-full py-4">
                <BsThermometerHalf className="text-gray-500 dark:text-gray-300 text-4xl mr-2" />
                <div className="details ml-1 text-gray-300 dark:text-white">
                  <div className="temp text-lg font-medium mb-1 flex items-center">
                    <span className="numb-2">
                      {Math.trunc(weatherData?.main?.feels_like) || ""}
                    </span>
                    <span className="deg text-lg">°C</span>
                  </div>
                  <p className="text-sm mt-[-6px]">Feels like</p>
                </div>
              </div>
              <div className="column text-gray-300 dark:text-white humidity flex items-center justify-center w-full py-4 border-l">
                <BsDropletHalf className="text-gray-500 dark:text-gray-300 text-4xl mr-2" />
                <div className="details ml-1">
                  <span className="text-lg font-medium mb-1">
                    {weatherData?.main?.humidity+"%" || ""}
                  </span>
                  <p className="text-sm mt-[-6px]">Humidity</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Weather;
