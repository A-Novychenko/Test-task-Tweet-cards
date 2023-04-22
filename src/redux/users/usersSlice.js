import { changeQuantityFollower, fetchUsers } from './usersOperations';

const { createSlice } = require('@reduxjs/toolkit');

const usersSlice = createSlice({
  initialState: [],
  name: 'users',
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(changeQuantityFollower.fulfilled, (state, { payload }) => {
        return state.map(user => {
          if (user.id === payload.id) {
            return { ...user, followers: payload.followers };
          }
          return user;
        });
      }),
});

export const usersReducer = usersSlice.reducer;
