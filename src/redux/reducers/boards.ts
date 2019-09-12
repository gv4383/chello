import { combineReducers } from 'redux';
import { FetchBoardsState } from '../types/boards';
import { Action } from '../store';

export const initialFetchState: FetchBoardsState = {
  data: [],
  error: null,
  isLoading: false,
  isResolved: false,
};

const fetchReducer = (state = initialFetchState, action: Action) => {
  switch (action.type) {
    case 'GET_BOARDS/LOADING':
      return {
        ...state,
        isLoading: true,
        isResolved: false,
      };
    case 'GET_BOARDS/SUCCESS':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isResolved: true,
      };
    case 'GET_BOARDS/ERROR':
      return {
        ...state,
        error: action.error,
        isLoading: false,
        isResolved: true,
      };
    default:
      return state;
  }
};

export default combineReducers({
  fetchReducer,
});
