import {
  instance,
  authHeader,
  checkForUnauthorizedRequest,
} from '../../utils/index';

export const getAllJobsThunk = async (_, thunkAPI) => {
  try {
    const { search, searchType, sort, searchStatus, page } =
      thunkAPI.getState().allJobs;

    let url = `/jobs?page=${page}&jobType=${searchType}&sort=${sort}&status=${searchStatus}`;

    if (search) {
      url = url + `&search=${search}`;
    }

    const response = await instance.get(url, authHeader(thunkAPI));

    return response.data;
  } catch (error) {
    return checkForUnauthorizedRequest(error, thunkAPI);
  }
};

export const getStatsThunk = async (_, thunkAPI) => {
  try {
    const response = await instance.get('/jobs/stats', authHeader(thunkAPI));
    return response.data;
  } catch (error) {
    return checkForUnauthorizedRequest(error, thunkAPI);
  }
};
