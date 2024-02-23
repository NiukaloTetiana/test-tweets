import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: 'filter',
  reducers: {
    filterUsers: (_, action) => {
      return action.payload;
    },
  },
});

export const { filterUsers, toggleFollowFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
