import React from "react";
import styles from "./WeatherImage.module.css";

const WeatherImage = ({ icon, description, isLarge }) => {
  let link = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <img
      className={isLarge ? styles.large : styles.small}
      src={link}
      alt={description}
    />
  );
};

export default WeatherImage;
