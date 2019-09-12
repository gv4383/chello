import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import boards from './reducers/boards';
import { BoardsState } from './types/boards';

export interface AppState {
  boards: BoardsState;
}

export interface Action {
  type: string;
  payload?: any;
  error?: string;
}

const enhancers = [];

const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') enhancers.push(devToolsExtension());

const composedEnhancers = compose(
  applyMiddleware(thunk),
  ...enhancers,
);

const rootReducer = combineReducers({
  boards,
});

const store = createStore(rootReducer, {}, composedEnhancers);

export default store;
