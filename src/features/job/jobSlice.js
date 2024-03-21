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

const jobSlice = createSlice({
  name: 'job',
  initialState: initialState,
  reducers: {
    handleInputValues: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearInputValues: (state) => {
      state.position = '';
      state.company = '';
    },
  },
});

export const addJob = createAsyncThunk('job/addJob', async (thunkAPI) => {
  const url = '/jobs';
  console.log(getUserFromLocalStorage());
});

export default jobSlice.reducer;
export const { handleInputValues, clearInputValues } = jobSlice.actions;
