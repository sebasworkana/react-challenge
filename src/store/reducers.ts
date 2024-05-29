// reducers.ts
import { RootState, AppActions, UPDATE_FIRST_NAME, UPDATE_LAST_NAME } from './types';

const initialState: RootState = {
  firstName: 'Breaking',
  lastName: 'Bad'
};

const formReducer = (state: RootState = initialState, action: AppActions): RootState => {
  switch (action.type) {
    case UPDATE_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload
      };
    case UPDATE_LAST_NAME:
      return {
        ...state,
        lastName: action.payload
      };
    default:
      return state;
  }
};

export default formReducer;
