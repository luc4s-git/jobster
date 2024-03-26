import moment from 'moment';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
});

export const formatDate = (date) => {
  const formattedDate = moment(date, moment.ISO_8601).format('MMM Do, YYYY ');
  return formattedDate;
};

export const authHeader = (thunkAPI) => {
  const { token } = thunkAPI.getState().user.user;

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
