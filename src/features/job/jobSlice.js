import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getUserFromLocalStorage } from '../../utils/localStorageManipulation';

import { showLoading, hideLoading, getAllJobs } from '../allJobs/allJobsSlice';
import { logoutUser } from '../user/userSlice';
import { instance } from '../../utils';

import { addJobThunk } from './jobThunk';

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: getUserFromLocalStorage()?.location || '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
};

export const addJob = createAsyncThunk('job/addJob', async (job, thunkAPI) => {
  return addJobThunk('/jobs', job, thunkAPI);
});

export const deleteJob = createAsyncThunk(
  'job/deleteJob',
  async (jobId, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().user.user;

      const response = await instance.delete(`/jobs/${jobId}`, {
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
  }
);

export const editJob = createAsyncThunk(
  'job/editJob',
  async (job, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().user.user;

      const { editJobId, position, company, jobLocation, jobType, status } =
        job;

      const response = await instance.patch(
        `/jobs/${editJobId}`,
        { position, company, jobLocation, jobType, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const jobSlice = createSlice({
  name: 'job',
  initialState: initialState,
  reducers: {
    handleInputValues: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearInputValues: () => {
      return {
        ...initialState,
      };
    },
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success('Job Created!');
      })
      .addCase(addJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteJob.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload.msg);
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(editJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success('Your job was edited successfully!');
      })
      .addCase(editJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export default jobSlice.reducer;
export const { handleInputValues, clearInputValues, setEditJob } =
  jobSlice.actions;
