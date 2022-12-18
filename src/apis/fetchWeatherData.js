import axios from "axios";

export const fetchWeatherData = (location) =>
  axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      q: location,
      units: "metric",
      appid: "85147c8030c85790a45b4ef95fd9f101",
    },
  });
