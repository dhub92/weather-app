import Moment from "moment";
import { extendMoment } from "moment-range";
import { v4 as uuidv4 } from "uuid";

const moment = extendMoment(Moment);

export const extractCurrentWeatherInfo = ({ current }) => ({
  id: uuidv4(),
  weather: current.weather[0],
  temperature: current.temp.toFixed(0) + "°C",
  dayName: convertEpochToDate(current.dt),
});

export const extractForecastedWeatherInfo = ({ daily }) =>
  [...daily].slice(1, daily.lenght).map((item) => ({
    id: uuidv4(),
    dayName: convertEpochToDate(item.dt),
    temperature: item.temp.day.toFixed(0) + "°C",
    weather: item.weather[0],
  }));

export const extractHistoricalWeatherInfo = (historicalWeatherList) =>
  historicalWeatherList.map((item) => ({
    id: uuidv4(),
    dayName: convertEpochToDate(item.current.dt),
    temperature: item.current.temp.toFixed(0) + "°C",
    weather: item.current.weather[0],
  }));

export const convertEpochToDate = (epochTime) =>
  moment.unix(epochTime).format("MMMM D");

export const getFivePreviousUnixTime = () => {
  const range = moment.range(
    moment().subtract(5, "day"),
    moment().subtract(1, "day")
  );
  const previousDateArray = Array.from(range.by("day"));
  return previousDateArray.map((item) => moment(item).format("X"));
};
