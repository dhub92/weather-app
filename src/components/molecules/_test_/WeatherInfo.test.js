import React from "react";
import { shallow, configure } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import WeatherInfo from "../WeatherInfo";
import DayNameText from "../../atoms/DayNameText"
import WeatherImage  from "../../atoms/WeatherImage"
import TemperatureText from "../../atoms/TemperatureText"

configure({ adapter: new Adapter() });

describe("DayNameText test", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      dayName: "test",
      temperature: "11°C",
      weather: { icon: "01d", description: "clouds" },
      isLarge: false,
    };

    wrapper = shallow(<WeatherInfo {...props} />);
  });

  it("renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render with the correct props", () => {
    expect(wrapper.find(DayNameText).props()).toEqual({ isLarge: false, children: 'test' });
    expect(wrapper.find(WeatherImage).props()).toEqual({ icon: '01d', description: 'clouds', isLarge: false });
    expect(wrapper.find(TemperatureText).props()).toEqual({ isLarge: false, children: '11°C' });
  });
});
