import React from 'react';
import TemperatureText from '../atoms/TemperatureText';
import DayTimeText from '../atoms/DayNameText';
import WeatherImage from '../atoms/WeatherImage';

const WeatherInfo = ({ dayName, temperature, weather, isLarge }) => {
    return (
        <>
            <DayTimeText isLarge={isLarge}>{dayName}</DayTimeText>
            <WeatherImage icon={weather.icon} description={weather.description} isLarge={isLarge}/>
            <TemperatureText isLarge={isLarge}>{temperature}</TemperatureText>
        </>
    )
}

export default WeatherInfo