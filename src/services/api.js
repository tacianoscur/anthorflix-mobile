import axios from 'axios';

import { API_URL } from '@env';

const api = axios.create({
  baseURL: API_URL,
});

console.log(`Api running at ${API_URL}!`);

export default api;