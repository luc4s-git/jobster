import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
});
