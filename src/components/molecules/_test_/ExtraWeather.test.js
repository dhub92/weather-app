import React from 'react';
import { shallow, configure } from 'enzyme';
import ExtraWeather from '../ExtraWeather';
import Adapter from 'enzyme-adapter-react-16';
import WeatherInfo from '../WeatherInfo';

configure({ adapter: new Adapter() });

describe('DayNameText test', () =>{
    let props;
    let wrapper;
    
    beforeEach(()=>{
        props ={
            weatherList: [{
                id: 1,
                dayName: 'test',
                temperature: '11°C',
                weather:{icon: '01d', description: 'clouds'}
            },
            {
                id: 2,
                dayName: 'test 2',
                temperature: '11°C',
                weather:{icon: '01d', description: 'clouds'}
            }],
        }
        wrapper = shallow(<ExtraWeather {...props} />);
    });

    it('renders without crashing', () => {
        expect(wrapper).toBeDefined();
    });
    
    it('should create two WeatherInfo components', () => {
       expect(wrapper.find(WeatherInfo)).toHaveLength(2);
    });
})