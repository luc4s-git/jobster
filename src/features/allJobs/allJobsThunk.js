import { instance, authHeader } from '../../utils/index';
import { logoutUser } from '../user/userSlice';

export const getAllJobsThunk = async (_, thunkAPI) => {
  try {
    const response = await instance.get('/jobs', authHeader(thunkAPI));

    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue('Unauthorized action! Logging out...');
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
