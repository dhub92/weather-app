import React from 'react';
import { shallow, configure } from 'enzyme';
import TemperatureText from '../TemperatureText';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('DayNameText test', () =>{
    let props;
    let wrapper;
    
    beforeEach(()=>{
        props ={
            isLarge: false,
        }
        wrapper = shallow(<TemperatureText {...props}>28</TemperatureText>);
    });

    it('renders without crashing', () => {
        expect(wrapper).toBeDefined();
    });
    
    it('should render text', () => {
        expect(wrapper.text()).toEqual('28');
    });
})