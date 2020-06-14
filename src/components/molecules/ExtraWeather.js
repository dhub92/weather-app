import React from "react";
import { Grid, CardContent, Card } from "@material-ui/core";
import WeatherInfo from "./WeatherInfo";
import PropTypes from "prop-types";

const ExtraWeather = ({ weatherList }) => {
  return (
    <Grid container alignContent="space-between" justify="center" spacing={1}>
      {weatherList.map((item) => {
        const { dayName, temperature, weather, id } = item;
        return (
          <Grid key={id} item>
            <Card>
              <CardContent>
                <WeatherInfo
                  dayName={dayName}
                  temperature={temperature}
                  weather={weather}
                  isLarge={false}
                />
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

const weatherListShape = PropTypes.shape({
  id: PropTypes.number,
  dayName: PropTypes.string,
  temperature: PropTypes.string,
  weather: PropTypes.shape({
    icon: PropTypes.string,
    description: PropTypes.string,
  }),
});

ExtraWeather.propTypes = {
  weatherList: PropTypes.arrayOf(weatherListShape),
};

export default ExtraWeather;
