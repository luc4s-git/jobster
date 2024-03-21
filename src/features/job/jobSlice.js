import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { instance } from '../../utils';
import { getUserFromLocalStorage } from '../../utils/localStorageManipulation';

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
  try {
    const { token } = thunkAPI.getState().user.user;
    const response = await instance.post('/jobs', job, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

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
      });
  },
});

export default jobSlice.reducer;
export const { handleInputValues, clearInputValues } = jobSlice.actions;
