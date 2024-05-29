// store.ts
import { createStore, applyMiddleware } from 'redux';
import { thunk, ThunkMiddleware } from 'redux-thunk';
import formReducer from './reducers';
import { RootState, AppActions } from './types';

const middleware = [thunk as ThunkMiddleware<RootState, AppActions>];

const store = createStore(
  formReducer,
  applyMiddleware(...middleware)
);

export default store;
