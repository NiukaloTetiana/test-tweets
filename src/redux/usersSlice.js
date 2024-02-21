import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addMatcher(isAnyOf(fetchUsers.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchUsers.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload || null;
      })
      .addMatcher(isAnyOf(fetchUsers.fulfilled), state => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const usersReducer = usersSlice.reducer;
