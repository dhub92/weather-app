import React, { useEffect, useState } from "react";
import {
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";
import WeatherInfo from "../molecules/WeatherInfo";
import ExtraWeather from "../molecules/ExtraWeather";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";
import WelcomeText from "../atoms/WelcomeText";

const WeatherMain = () => {
  const containerStyle = makeStyles({
    root: {
      width: "40rem",
    },
  })();

  const [dayName, setDayName] = useState("");
  const [currentTemp, setCurrentTemp] = useState("");
  const [showHistoricalDays, setShowHistoricalDays] = useState(false);
  const [showForecastedDays, setShowForecastedDays] = useState(false);

  const { currentWeather, forecastedWeather, historicalWeather } = useSelector(
    (state) => ({
      currentWeather: state.currentWeather,
      forecastedWeather: state.forecastedWeather,
      historicalWeather: state.historicalWeather,
    })
  );

  useEffect(() => {
    if (!isEmpty(currentWeather)) {
      setCurrentTemp(currentWeather.temperature);
      setDayName(currentWeather.dayName);
    }
  }, [currentWeather]);

  const loadedInfo = (
    <>
      <WeatherInfo
        dayName={dayName}
        temperature={currentTemp}
        weather={currentWeather.weather}
        isLarge={true}
      />
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={showHistoricalDays}
              onChange={() => {
                setShowHistoricalDays(!showHistoricalDays);
                setShowForecastedDays(false);
              }}
              name="checkedB"
              color="primary"
            />
          }
          label="Show the last 5 days "
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={showForecastedDays}
              onChange={() => {
                setShowForecastedDays(!showForecastedDays);
                setShowHistoricalDays(false);
              }}
              name="checkedB"
              color="primary"
            />
          }
          label="Show forecasted 7 days"
        />
      </FormGroup>
      <br />
      {showHistoricalDays && <ExtraWeather weatherList={historicalWeather} />}
      {showForecastedDays && <ExtraWeather weatherList={forecastedWeather} />}
    </>
  );

  return (
    <Grid
      className={containerStyle.root}
      container
      item
      alignItems="center"
      direction="column"
    >
      {isEmpty(currentWeather) ? <WelcomeText /> : loadedInfo}
    </Grid>
  );
};

export default WeatherMain;
