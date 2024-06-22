const get = () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error("Geolocation is not available"));
    }
  });
};

const getUserLocationWithWeather = async () => {
  try {
    const pos = await get();
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&appid=b190a0605344cc4f3af08d0dd473dd25`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error getting user location or weather data:", error);
  }
};

export default getUserLocationWithWeather;
