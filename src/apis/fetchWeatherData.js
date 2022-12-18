import axios from "axios";

export const fetchWeatherData = (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lat={lat}&lon={lon}&appid=85147c8030c85790a45b4ef95fd9f101`;
  return axios.get(url);
};
