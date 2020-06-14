import React from "react";
import { shallow, configure } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import WeatherPage from "../WheaterPage"
import CitiesList from "../../molecules/CitiesList";
import WeatherMain from "../../organisms/WeatherMain";

configure({ adapter: new Adapter() });

describe("WeatherPage test", () => {
  
  let wrapper;
  
  beforeEach(() => {
    
    wrapper = shallow(<WeatherPage />);
  });

  it("renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("should find CitiesList and WeatherMain components ", () =>{
    expect(wrapper.find(CitiesList).exists()).toBe(true)
    expect(wrapper.find(WeatherMain).exists()).toBe(true)
  })
});
