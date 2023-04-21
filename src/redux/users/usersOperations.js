import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://642b3417d7081590f91e85c9.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get('/users');
      return resp.data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);
