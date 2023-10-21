import axios from 'axios';

export const postData = async (data: { url: string; body: object }) => {
  const response = await axios.post(data.url, data.body);
  return response.data;
};
