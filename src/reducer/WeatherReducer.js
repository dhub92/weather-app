const initialState = {
    selectedCity: {},
    currentWeather: {},
    forecastedWeather: {},
    historicalWeather: {},
}

const weatherReducer = (state, action) =>{
    switch(action.type){
        case 'SET_SELECTED_CITY':
            return {
                ...state,
                selectedCity: action.payload
            }
        case 'GET_CURRENT_WEATHER':
            return {
                ...state,
                currentWeather: action.payload
            }
        case 'GET_FORECAST_WEATHER':
            return {
                ...state,
                forecastedWeather: action.payload
            }
        case 'GET_HISTORICAL_WEATHER':
            return {
                ...state,
                historicalWeather: action.payload
            }
        default:
            return {...initialState}
    }
}

export default weatherReducer;