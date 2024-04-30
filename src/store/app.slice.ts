import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './index';
import { PeriodicElement } from '../types';

export interface AppState {
  firstName: string;
  lastName: string;
  loading: boolean;
  elements: PeriodicElement[];
  error: null | unknown;
}

const initialState: AppState = {
  firstName: '',
  lastName: '',
  loading: false,
  elements: [],
  error: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNames: (
      state,
      action: PayloadAction<{ firstName: string; lastName: string }>,
    ) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeriodicTable.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPeriodicTable.fulfilled, (state, action) => {
        state.loading = false;
        state.elements = action.payload;
      })
      .addCase(fetchPeriodicTable.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: appActions, reducer: appReducer } = appSlice;

export const selectAppState = (state: RootState) => state.appReducer;

export const fetchPeriodicTable = createAsyncThunk(
  'data/fetch',
  async (_arg, { rejectWithValue }) => {
    return fetch('/data.json')
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err.message));
  },
);
