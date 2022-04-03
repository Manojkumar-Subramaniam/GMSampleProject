import React from 'react';
import renderer from 'react-test-renderer';
import CommitInfo from '../CommitInfo/Container/CommitInfo';
import gitCommitAPI from '../../../mockStore';
import {useRoute} from '@react-navigation/native';
jest.mock('@react-navigation/native');

describe('GM Home', () => {
  useRoute.mockReturnValue({
    params: {data: gitCommitAPI[0]},
  });

  test('Commit Info', () => {
    const commitInfoSnapshot = renderer.create(<CommitInfo />).toJSON();
    expect(commitInfoSnapshot).toMatchSnapshot();
  });
});
