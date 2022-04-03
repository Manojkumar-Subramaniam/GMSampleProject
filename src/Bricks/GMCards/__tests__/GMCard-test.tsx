import React from 'react';
import renderer from 'react-test-renderer';
import GMCards from '..';

describe('GMCard Tests', () => {
  test('GMCard Snapshot', () => {
    const GMCardSnapshot = renderer.create(<GMCards onPress={() => { }} />).toJSON();
    expect(GMCardSnapshot).toMatchSnapshot();
  });
});
