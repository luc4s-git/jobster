import { instance } from '../../utils';
import { logoutUser } from '../user/userSlice';
import { getAllJobs } from '../allJobs/allJobsSlice';

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

export const deleteJobThunk = async (url, jobID, thunkAPI) => {
  try {
    const { token } = thunkAPI.getState().user.user;

    const response = await instance.delete(`${url}/${jobID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    thunkAPI.dispatch(getAllJobs());

    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue('Unauthorized action! Logging out...');
    }

    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const editJobThunk = async (url, job, thunkAPI) => {
  try {
    const { token } = thunkAPI.getState().user.user;

    const { editJobId, position, company, jobLocation, jobType, status } = job;

    const response = await instance.patch(
      `${url}/${editJobId}`,
      { position, company, jobLocation, jobType, status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
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
