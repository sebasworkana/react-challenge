// actions.ts
import { AppActions, UPDATE_FIRST_NAME, UPDATE_LAST_NAME } from './types';

export const updateFirstName = (firstName: string): AppActions => ({
  type: UPDATE_FIRST_NAME,
  payload: firstName
});

export const updateLastName = (lastName: string): AppActions => ({
  type: UPDATE_LAST_NAME,
  payload: lastName
});
