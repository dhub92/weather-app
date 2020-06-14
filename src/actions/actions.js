export const setSelectedCity = (city) => ({
    type: 'SET_SELECTED_CITY',
    payload: city
})

export const getForecastedWeather = (forecastWeather) => ({
    type: 'GET_FORECAST_WEATHER',
    payload: forecastWeather
})

export const getHistoricalWeather = (historicalWeather) => ({
    type: 'GET_HISTORICAL_WEATHER',
    payload: historicalWeather
})

export const getCurrentWeather = (currentWeather) => ({
    type: 'GET_CURRENT_WEATHER',
    payload: currentWeather
})