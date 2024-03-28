import { instance, authHeader } from '../../utils/index';
import { logoutUser } from '../user/userSlice';

export const getAllJobsThunk = async (_, thunkAPI) => {
  try {
    const { search, searchType, sort, searchStatus, page } =
      thunkAPI.getState().allJobs;

    let url = `/jobs?page=${page}&jobType=${searchType}&sort=${sort}&status=${searchStatus}`;

    if (search) {
      url = url + `&search=${search}`;
    }

    const response = await instance.get(url, authHeader(thunkAPI));

    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue('Unauthorized action! Logging out...');
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getStatsThunk = async (_, thunkAPI) => {
  try {
    const response = await instance.get('/jobs/stats', authHeader(thunkAPI));
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue('Unauthorized action! Logging out...');
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
