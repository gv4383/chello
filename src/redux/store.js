import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import boardsReducer from './reducers/boardsReducer';

const enhancers = [];

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') enhancers.push(devToolsExtension());

const composedEnhancers = compose(
  applyMiddleware(thunk),
  ...enhancers,
);

const rootReducer = combineReducers({
  boards: boardsReducer,
});

const store = createStore(rootReducer, {}, composedEnhancers);

export default store;
