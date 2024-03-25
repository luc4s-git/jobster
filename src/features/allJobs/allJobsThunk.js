import { instance } from '../../utils/index';
import { logoutUser } from '../user/userSlice';

export const getAllJobsThunk = async (jobs, thunkAPI) => {
  try {
    const { token } = thunkAPI.getState().user.user;
    const response = await instance.get('/jobs', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue('Unauthorized action! Logging out...');
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
