const { createSlice } = require('@reduxjs/toolkit');

const isFollowingSlice = createSlice({
  initialState: [],
  name: 'isFollowing',
  reducers: {
    addFollowing: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
    },
  },
});

export const isFollowingReducer = isFollowingSlice.reducer;
export const { addFollowing } = isFollowingSlice.actions;
