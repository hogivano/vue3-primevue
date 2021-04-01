import axios from 'axios';

const API_URL = process.env.API_URL || 'http://garansiaki.com:8080/Odata/';
export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});
