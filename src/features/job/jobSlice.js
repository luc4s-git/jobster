import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getUserFromLocalStorage } from '../../utils/localStorageManipulation';

import { addJobThunk, getAllJobsThunk } from './jobThunk';

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: getUserFromLocalStorage().location || '',
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

export const getAllJobs = createAsyncThunk(
  'job/getAllJobs',
  async (job, thunkAPI) => {
    return getAllJobsThunk('/jobs', job, thunkAPI);
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
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      })
      .addCase(getAllJobs.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export default jobSlice.reducer;
export const { handleInputValues, clearInputValues } = jobSlice.actions;
