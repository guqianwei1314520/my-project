import axios from 'axios';
var instance = axios.create({
  baseURL: '/api',
  timeout: 100000,
  responseType: 'json'
});
export default instance;
