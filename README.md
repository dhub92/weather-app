# Weather App
A simple web application that shows weather of ten cities using React js and OpenWeatherMap API. You can see the app working [here](https://dhub92.github.io/weather-app/)
# Technologies used for this proyect
* React js
* Redux js
* Thunk middleware for Redux
* Material UI
* Axios
* Lodash
* Moment js
* Enzyme
* Jest
# Prerequisite
* Node js 
# How to install
1. Download the proyect or clone it using `git clone https://github.com/dhub92/weather-app.git`
2. In the path where you downloaded the project, run `npm install`
3. Once npm finish installing the packages, run `npm start`
4. Open a browser tab, and enter `http://localhost:3000/` in the url bar.
# How It works
* The app consits only in one page
* When the app loads for the first time, it will show a list of ten cities in the left side of the screen
* When a city is selected, the app will show the current weather of city with two options
* If you check **Show the latest 5 days** option, a row with the five latest days with its weather information will appear down of the current weather
* If you check **Show the predicted 7 days** option, a row with the predicted seven days with its weather information will appear down of the current weather
* Keep in mind that you cannot select both options at the same times 
# Observation
* The OpenWeatherMap API key has some constraints when you call it throught the app. You cannot do more than 60 calls per minute and 1 million calls per month. Also, you cannot do more than 1000 calls per day.
