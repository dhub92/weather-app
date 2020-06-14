import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import WeatherInfo from "./WeatherInfo";
const ExtraWeather = ({ weatherList }) => {
  const containerStyle = makeStyles({
    root: {
      width: "5rem",
      border: "1px solid black",
    },
  })();

  return (
    <Grid container justify="center">
      {weatherList.map((item) => {
        const { dayName, temperature, weather, id } = item;
        return (
          <Grid
            key={id}
            className={containerStyle.root}
            container
            item
            alignItems="center"
            direction="column"
          >
            <WeatherInfo
              dayName={dayName}
              temperature={temperature}
              weather={weather}
              isLarge={false}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ExtraWeather;
