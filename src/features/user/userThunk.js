import { instance, authHeader, checkForUnauthorizedRequest } from '../../utils';
import { logoutUser } from './userSlice';
import { clearAllJobsState } from '../allJobs/allJobsSlice';
import { clearInputValues } from '../job/jobSlice';

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await instance.post(url, user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await instance.post(url, user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await instance.patch(url, user, authHeader(thunkAPI));

    return response.data;
  } catch (error) {
    return checkForUnauthorizedRequest(error, thunkAPI);
  }
};

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser(message));
    thunkAPI.dispatch(clearAllJobsState());
    thunkAPI.dispatch(clearInputValues());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
