import axios from "axios";
import {
  getCurrentWeather,
  getHistoricalWeather,
  getForecastedWeather,
} from "../actions/actions";
import {
  extractCurrentWeatherInfo,
  extractForecastedWeatherInfo,
  getFivePreviousUnixTime,
  extractHistoricalWeatherInfo,
} from "../utils/weatherUtils";

const baseURL = "https://api.openweathermap.org/data/2.5/onecall";
const appId = "2edd39c7c1d23b84acf5634f1c6fd741";

export const getCurrentWeatherService = ({ lat, lon }) => async (dispatch) => {
  return axios
    .get(
      `${baseURL}?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${appId}`
    )
    .then((response) => {
      dispatch(getCurrentWeather(extractCurrentWeatherInfo(response.data)));
      dispatch(
        getForecastedWeather(extractForecastedWeatherInfo(response.data))
      );
    })
    .catch((error) => console.log("Error", error));
};

const getHistoricalWeatherByDate = (lat, lon, unixTime) =>
  axios
    .get(
      `${baseURL}/timemachine?lat=${lat}&lon=${lon}&dt=${unixTime}&units=metric&appid=${appId}`
    )
    .then((response) => response.data)
    .catch((error) => console.log("Error", error));

export const getHistoricalWeatherService = ({lat, lon}) => async (dispatch) => {
  Promise.all(
    getFivePreviousUnixTime().map((time) =>
      getHistoricalWeatherByDate(lat, lon, time)
    )
  )
    .then((response) =>
      dispatch(getHistoricalWeather(extractHistoricalWeatherInfo(response)))
    )
    .catch((error) => error);
};
