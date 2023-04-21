const { createSlice } = require('@reduxjs/toolkit');

const isFollowingSlice = createSlice({
  initialState: [],
  name: 'isFollowing',
  // extraReducers: builder => builder.addCase(),
});

export const isFollowingReducer = isFollowingSlice.reducer;
