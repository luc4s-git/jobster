import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { instance } from '../../utils';

import { redirect } from 'react-router-dom';

const initialState = {
  isLoading: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
});

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user) => {
    try {
      const response = await instance.post('/auth/testingRegister', user);

      if (response.status === 201) {
        toast.success(`Welcome ${user.name}`);
        return redirect('/');
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const loginUser = createAsyncThunk('user/loginUser', async (user) => {
  console.log(`Login user: ${JSON.stringify(user)}`);
});

export default userSlice.reducer;
