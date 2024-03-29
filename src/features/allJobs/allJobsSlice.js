import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { getAllJobsThunk, getStatsThunk } from './allJobsThunk';

const initialFiltersState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
};

export const getAllJobs = createAsyncThunk(
  'allJobs/getAllJobs',
  getAllJobsThunk
);

export const getStats = createAsyncThunk('allJobs/getStats', getStatsThunk);

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState: initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    nextPage: (state, { payload }) => {
      const newPage = payload;
      state.page = newPage;
    },
    prevPage: (state, { payload }) => {
      const newPage = payload;
      state.page = newPage;
    },
    clearAllJobsState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.jobs = payload.jobs;
        state.numOfPages = payload.numOfPages;
        state.totalJobs = payload.totalJobs;
      })
      .addCase(getAllJobs.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(getStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStats.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.stats = payload.defaultStats;
        state.monthlyApplications = payload.monthlyApplications;
      })
      .addCase(getStats.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export default allJobsSlice.reducer;
export const {
  handleChange,
  clearFilters,
  nextPage,
  changePage,
  prevPage,
  clearAllJobsState,
} = allJobsSlice.actions;
