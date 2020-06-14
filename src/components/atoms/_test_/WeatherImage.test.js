import React from 'react';
import { shallow, configure } from 'enzyme';
import WeatherImage from '../WeatherImage';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('DayNameText test', () =>{
    let props;
    let wrapper;
    
    beforeEach(()=>{
        props ={
            icon: '01d',
            description: 'clouds',
            isLarge: true,
        }
        wrapper = shallow(<WeatherImage {...props}/>);
    });

    it('renders without crashing', () => {
        expect(wrapper).toBeDefined();
    });
    
    it('should take props', () => {
       expect(wrapper.find('img').prop("src")).toEqual('http://openweathermap.org/img/wn/01d@2x.png');
       expect(wrapper.find('img').prop("className")).toEqual('large');
       expect(wrapper.find('img').prop("alt")).toEqual('clouds');
    });
})