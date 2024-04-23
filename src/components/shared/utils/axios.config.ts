import axios from 'axios';

export const axiosOptions = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,

  headers: {
    Accept: 'application/json',
    crossDomain: true,
    'API-KEY': process.env.NEXT_PUBLIC_API_KEY || '',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json'
  }
};

const instance = axios.create({
  ...axiosOptions
});

instance.prototype.all = axios.all;

export default instance;
