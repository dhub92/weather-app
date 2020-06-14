import React from "react";
import styles from "./WeatherImage.module.css";
import PropTypes from 'prop-types';

const WeatherImage = ({ icon="", description="", isLarge=false }) => {
  let link = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <img
      className={isLarge ? styles.large : styles.small}
      src={link}
      alt={description}
    />
  );
};

WeatherImage.propTypes={
  icon: PropTypes.string,
  description: PropTypes.string,
  isLarge: PropTypes.bool,
}

export default WeatherImage;
