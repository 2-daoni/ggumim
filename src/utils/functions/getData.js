import axios from 'axios';

export const getData = async (url) => {
  let response = await axios.get(url);
  response = await response.data;
  return response;
};
