import { instance, authHeader, checkForUnauthorizedRequest } from '../../utils';
import { getAllJobs } from '../allJobs/allJobsSlice';

export const addJobThunk = async (url, job, thunkAPI) => {
  try {
    const response = await instance.post(url, job, authHeader(thunkAPI));
    return response.data;
  } catch (error) {
    return checkForUnauthorizedRequest(error, thunkAPI);
  }
};

export const deleteJobThunk = async (url, jobID, thunkAPI) => {
  try {
    const response = await instance.delete(
      `${url}/${jobID}`,
      authHeader(thunkAPI)
    );

    thunkAPI.dispatch(getAllJobs());

    return response.data;
  } catch (error) {
    return checkForUnauthorizedRequest(error, thunkAPI);
  }
};

export const editJobThunk = async (url, job, thunkAPI) => {
  try {
    const { editJobId, position, company, jobLocation, jobType, status } = job;

    const response = await instance.patch(
      `${url}/${editJobId}`,
      { position, company, jobLocation, jobType, status },
      authHeader(thunkAPI)
    );

    return response.data;
  } catch (error) {
    return checkForUnauthorizedRequest(error, thunkAPI);
  }
};
