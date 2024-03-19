import { configureStore } from '@reduxjs/toolkit';
import namesReducer from './names';

export default configureStore({
  reducer: {
    names: namesReducer
  },
});