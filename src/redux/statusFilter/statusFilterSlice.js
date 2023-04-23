const { createSlice } = require('@reduxjs/toolkit');

const statusFilterSlice = createSlice({
  initialState: 'all',
  name: 'statusFilter',
  reducers: {
    changeStatusFilter: {
      reducer: (state, { payload }) => {
        return (state = payload);
      },
    },
  },
});

export const statusFilterSliceReducer = statusFilterSlice.reducer;
export const { changeStatusFilter } = statusFilterSlice.actions;
