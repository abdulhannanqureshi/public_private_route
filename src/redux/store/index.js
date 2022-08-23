import { createStore, applyMiddleware } from 'redux';
import { RootReducer } from '../reducers';

import { createLogicMiddleware } from 'redux-logic';
import logger from 'redux-logger';
import { AllLogics } from '../logic'

import { routerMiddleware } from 'react-router-redux';

export default function configureStore(history, initialState) {
  const logicMiddleware = createLogicMiddleware(AllLogics);
  /*History for pushing and routing to path */

  const middlewares = [routerMiddleware(history), logicMiddleware];

  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const store = createStore(RootReducer, applyMiddleware(...middlewares));

  return store
}

