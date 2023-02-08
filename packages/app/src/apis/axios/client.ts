import axios from 'axios';
import interceptorsUse from './interceptors';

// TODO Change local ip for ios
const baseURL = __DEV__ ? 'http://localhost:1337/api' : 'https://api.kbant.com/v1';
const timeout = 1000;
// Access to XMLHttpRequest at 'http://localhost:1337/api/articles' from origin 'http://localhost:3000' has been blocked by CORS policy: Request header field x-kbant-header is not allowed by Access-Control-Allow-Headers in preflight response.
// const headers = { 'X-Kbant-Header': 'krust' };
const headers = {};

const client = axios.create({ baseURL, timeout, headers });

interceptorsUse(client);
export default client;
