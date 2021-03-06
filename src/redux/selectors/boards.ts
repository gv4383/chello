import { createSelector } from 'reselect';

export const boardsState = (state: any) => state.boards;

export const fetchBoardsState = createSelector(
  boardsState,
  boardsState => boardsState.fetchReducer,
);

export const boards = createSelector(
  fetchBoardsState,
  fetchBoardsState => fetchBoardsState.data,
);
