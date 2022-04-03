import React from 'react';
import GMHome from '../GMHome/Container/GMHome';
import Enzyme, { shallow } from 'enzyme';
import mockApi from '../../../mockStore';
import { shallowToJson } from 'enzyme-to-json';
import { useNavigation } from '@react-navigation/native';
jest.mock('@react-navigation/native');

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('GM Home Snapshop', () => {
  useNavigation.mockReturnValue({
    navigate: jest.fn(),
  });
  React.useState = jest.fn();

  it('GM Home Loader', () => {
    let setLoadComplete = jest.fn();
    setLoadComplete.mockClear();
    React.useState = () => [false, setLoadComplete];

    let setCommitData = jest.fn();
    setCommitData.mockClear();
    React.useState = () => [[], setCommitData];

    const wrapper = shallow(<GMHome />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('GM Home with data', () => {
    let setLoadComplete = jest.fn();
    setLoadComplete.mockClear();
    React.useState = () => [true, setLoadComplete];

    let setCommitData = jest.fn();
    setCommitData.mockClear();
    React.useState = () => [mockApi, setCommitData];
    const wrapper = shallow(<GMHome />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('GM Home on failure API', () => {
    let setLoadComplete = jest.fn();
    setLoadComplete.mockClear();
    React.useState = () => [true, setLoadComplete];

    let setCommitData = jest.fn();
    setCommitData.mockClear();
    React.useState = () => [[], setCommitData];
    const wrapper = shallow(<GMHome />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
