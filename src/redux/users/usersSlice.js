import { fetchUsers } from './usersOperations';

const { createSlice } = require('@reduxjs/toolkit');

const usersSlice = createSlice({
  initialState: [],
  name: 'users',
  extraReducers: builder =>
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      return payload;
    }),
});

export const usersReducer = usersSlice.reducer;
