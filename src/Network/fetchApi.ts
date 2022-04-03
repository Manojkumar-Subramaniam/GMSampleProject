import axios from 'axios';

const fetchApi = async <T>(userName: string, repo: string): Promise<T> => {
  return await axios
    .get(`https://api.github.com/repos/${userName}/${repo}/commits`)
    .then(result => {
      return result.data;
    })
    .catch(e => {
      return [];
    });
};

export default fetchApi;
