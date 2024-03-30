import moment from 'moment';
import axios from 'axios';

import { clearStore } from '../features/user/userSlice';

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

export const checkForUnauthorizedRequest = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue('Unauthorized action! Logging Out...');
  }

  return thunkAPI.rejectWithValue(error.response.data.msg);
};
