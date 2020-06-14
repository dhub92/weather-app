import React from "react";
import TemperatureText from "../atoms/TemperatureText";
import DayTimeText from "../atoms/DayNameText";
import WeatherImage from "../atoms/WeatherImage";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

const WeatherInfo = ({ dayName, temperature, weather, isLarge }) => {
  return (
    <Grid container justify="center" alignItems="center" direction="column">
      <DayTimeText isLarge={isLarge}>{dayName}</DayTimeText>
      <WeatherImage
        icon={weather.icon}
        description={weather.description}
        isLarge={isLarge}
      />
      <TemperatureText isLarge={isLarge}>{temperature}</TemperatureText>
    </Grid>
  );
};

WeatherInfo.propTypes = {
  id: PropTypes.number,
  dayName: PropTypes.string,
  temperature: PropTypes.string,
  weather: PropTypes.shape({
    icon: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default WeatherInfo;
