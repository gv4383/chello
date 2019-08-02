import API from '../utils/api/index';
import actionCreator from '../lib/actionCreator';

const getBoardsAction = actionCreator('GET_BOARDS');

export const getBoards = () => dispatch => {
  dispatch(getBoardsAction.loading());
  return API.get('/api/boards')
    .then(res => dispatch(getBoardsAction.success(res)))
    .catch(err => dispatch(getBoardsAction.error(err.message)));
};
