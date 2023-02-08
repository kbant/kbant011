import axios from 'axios';
import interceptorsUse from './interceptors';

// TODO Change local ip for ios
const baseURL = __DEV__ ? 'http://localhost:1337/api' : 'https://api.kbant.com/v1';
const timeout = 1000;
const headers = { 'X-Kbant-Header': 'krust' };

const client = axios.create({ baseURL, timeout, headers });

interceptorsUse(client);
export default client;
