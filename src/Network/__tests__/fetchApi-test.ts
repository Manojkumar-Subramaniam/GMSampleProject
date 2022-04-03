import gitCommitAPI from '../../../mockStore';
import axios from 'axios';
import fetchApi from '../fetchApi';

jest.mock('axios');

describe('Api Test', () => {
  it('Valid api data', async () => {
    axios.get.mockResolvedValueOnce({
      data: gitCommitAPI,
    });

    const result = await fetchApi('rockimanj', 'GMSampleProject');

    expect(result).toEqual(gitCommitAPI);
  });

  it('Api Failure', async () => {
    axios.get.mockRejectedValueOnce(new Error());

    const result = await fetchApi('rockimanj', 'GMSampleProject');

    expect(result).toEqual([]);
  });
});
