import { instance, authHeader } from '../../utils/index';
import { logoutUser } from '../user/userSlice';

export const getAllJobsThunk = async (_, thunkAPI) => {
  try {
    const { searchType, sort, searchStatus, page } =
      thunkAPI.getState().allJobs;

    const response = await instance.get(
      `/jobs?page=${page}&jobType=${searchType}&sort=${sort}&status=${searchStatus}`,
      authHeader(thunkAPI)
    );

    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue('Unauthorized action! Logging out...');
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
