import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import Thuck from 'redux-thunk';

import movieReducer from './movieDucks';

const rootReducer = combineReducers({
  movies: movieReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(Thuck)),
  );

  return store;
}
