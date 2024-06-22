import {useEffect, useState} from 'react'
import getUserLocationWithWehther from '../hooks/useWheather';
import { BsThermometerHalf, BsDropletHalf, BsMap } from 'react-icons/bs';
const Wheather = () => {
    const [weatherData, setWeatherData] = useState({});
    useEffect(() => {
        const getWeatherData = async () => {
            setWeatherData(await getUserLocationWithWehther());
          }
            getWeatherData()
          console.log(weatherData)
          const iconUrl = `http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`;
          document.getElementById("wicon").src = iconUrl;
    },[])
    
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 shadow-lg backdrop-blur-lg rounded-lg border border-white/18 p-5 w-96 relative z-10">
        <header className="text-2xl font-medium text-blue-800 dark:text-white flex items-center border-b border-gray-300 pb-4">
          <BsMap className="mr-2 text-xl cursor-pointer" />
          Weather App
        </header>
        <section className="weather-part flex flex-col items-center mt-7">
          <img id="wicon" alt="Weather Icon" className="max-w-[125px] mb-4" />
          <div className="temp flex items-center font-medium text-[72px] text-gray-300 dark:text-white">
            <span className="numb font-semibold ">{Math.trunc(weatherData?.main?.temp)}</span>
            <span className="deg text-4xl mt-2 ml-1 ">°C</span>
          </div>
          <div className="weather text-xl text-center mb-4 text-gray-300">{weatherData?.current?.weather[0]?.description}</div>
          <div className="location text-gray-300 dark:text-white flex items-center text-lg text-center mb-7">
            <BsMap className="mr-2 text-2xl" />
            <span>{weatherData?.name}</span>
          </div>
          <div className="bottom-details flex w-full justify-between border-t border-gray-300 pt-4">
            <div className="column feels flex items-center justify-center w-full py-4">
              <BsThermometerHalf className="text-gray-500 dark:text-gray-300 text-4xl mr-2" />
              <div className="details ml-1 text-gray-300 dark:text-white">
                <div className="temp  text-lg font-medium mb-1 flex items-center">
                  <span className="numb-2">{Math.trunc(weatherData?.main?.feels_like)}</span>
                  <span className="deg text-lg">°C</span>
                </div>
                <p className="text-sm mt-[-6px]">Feels like</p>
              </div>
            </div>
            <div className="column text-gray-300 dark:text-white humidity flex items-center justify-center w-full py-4 border-l">
              <BsDropletHalf className="text-gray-500 dark:text-gray-300 text-4xl mr-2" />
              <div className="details ml-1">
                <span className="text-lg font-medium mb-1">{weatherData?.main?.humidity}%</span>
                <p className="text-sm mt-[-6px]">Humidity</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Wheather
