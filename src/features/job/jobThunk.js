import { instance } from '../../utils';
import { logoutUser } from '../user/userSlice';

export const addJobThunk = async (url, job, thunkAPI) => {
  try {
    const { token } = thunkAPI.getState().user.user;
    const response = await instance.post(url, job, {
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
