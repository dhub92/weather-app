import {
  extractCurrentWeatherInfo,
  extractHistoricalWeatherInfo,
  extractForecastedWeatherInfo,
  convertEpochToDate,
} from "../weatherUtils";

test("should convert unix time to date", () => {
  expect(convertEpochToDate(1591988614)).toBe("June 12");
});

test("should extract current weather info from object", () => {
  const mockedCurrentWeather = {
    mockAttribute: "abc",
    current: {
      dt: 1591988614,
      temp: 12,
      weather: [{ id: "1", name: "cloud" }],
    },
  };

  const mokedUUID = "123456";

  const test = {
    ...extractCurrentWeatherInfo(mockedCurrentWeather),
    id: mokedUUID,
  };

  const expectedValue = {
    id: mokedUUID,
    dayName: "June 12",
    temperature: "12°C",
    weather: { id: "1", name: "cloud" },
  };

  expect(test).toStrictEqual(expectedValue);
});

test("should extract historical weather info from object", () => {
  const mockedCurrentWeather = [
    {
      current: {
        dt: 1591988614,
        temp: 12,
        weather: [{ id: "1", name: "cloud" }],
      },
    },
  ];

  const mokedUUID = "123456";

  const test = extractHistoricalWeatherInfo(
    mockedCurrentWeather
  ).map((item) => ({ ...item, id: mokedUUID }));

  const expectedValue = [
    {
      id: mokedUUID,
      dayName: "June 12",
      temperature: "12°C",
      weather: { id: "1", name: "cloud" },
    },
  ];

  expect(test).toStrictEqual(expectedValue);
});


test("should extract forecasted weather info from object", () => {
  const mockedCurrentWeather = 
    {
      daily: [{
        dt: 1591988614,
        temp:{day:12} ,
        weather: [{ id: "1", name: "cloud" }],
      },{
        dt: 1591988614,
        temp:{day:12} ,
        weather: [{ id: "1", name: "cloud" }],
      }],
    };
  

  const mokedUUID = "123456";

  const test = extractForecastedWeatherInfo(
    mockedCurrentWeather
  ).map((item) => ({ ...item, id: mokedUUID }));

  const expectedValue = [
    {
      id: mokedUUID,
      dayName: "June 12",
      temperature: "12°C",
      weather: { id: "1", name: "cloud" },
    },
  ];

  expect(test).toStrictEqual(expectedValue);
});
