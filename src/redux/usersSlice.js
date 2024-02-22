import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  currentPage: 1,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.items =
          action.meta.arg === 1
            ? action.payload
            : [...state.items, ...action.payload];
        state.currentPage = action.meta.arg;
      })
      .addMatcher(isAnyOf(fetchUsers.pending), state => {
        state.isLoading = true;
        state.error = null;
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
