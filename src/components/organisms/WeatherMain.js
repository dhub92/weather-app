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
import { DisappearedLoading } from "react-loadingg";
import { grey } from "@material-ui/core/colors";

const WeatherMain = () => {
  const containerStyle = makeStyles({
    root: {
      width: "100%",
    },
  })();

  const [dayName, setDayName] = useState("");
  const [currentTemp, setCurrentTemp] = useState("");
  const [showHistoricalDays, setShowHistoricalDays] = useState(false);
  const [showForecastedDays, setShowForecastedDays] = useState(false);

  const {
    currentWeather,
    forecastedWeather,
    historicalWeather,
    isLoading,
  } = useSelector((state) => ({
    currentWeather: state.currentWeather,
    forecastedWeather: state.forecastedWeather,
    historicalWeather: state.historicalWeather,
    isLoading: state.isLoading,
  }));

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
          label="Show the latest 5 days "
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
          label="Show the predicted 7 days"
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
      {isEmpty(currentWeather) ? (
        <WelcomeText />
      ) : isLoading ? (
        //Style prop has an empty prop for centering the DisappearedLoading component into the Grid container
        <DisappearedLoading style={{}} size="large" color={grey[600]} />
      ) : (
        loadedInfo
      )}
    </Grid>
  );
};

export default WeatherMain;
